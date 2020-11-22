<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductStoreRequest;
use App\Http\Requests\ProductUpdateRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/**
 * @group Product
 *
 * Product managment
 */
class ProductController extends Controller
{
    /**
     * api/products
     *
     * Returns all products with pagination
     */
    public function index(Request $request)
    {
        $limit = $request->get('limit', 0);

        $products = Product::with(['company' => function ($query) {
            $query->select('id', 'company_name', 'company_street', 'company_street_number', 'company_city');
        }])->paginate($limit);
        return response()->json(['data' => $products]);
    }

    /**
     * api/products/search
     *
     * @bodyParam phrase string required
     * @bodyParam category integer optional
     * @bodyParam order_by string optional
     * @bodyParam ascending boolean optional
     */
    public function search(Request $request)
    {
        $request->validate([
            'phrase' => 'required|string',
            'category' => 'nullable|integer',
            'order_by' => 'nullable|string',
            'ascending' => 'nullable|boolean'
        ]);


        $list = Product::query();
        $pieces = explode(" ", $request->get('phrase', ''));
        if (!empty($request->get('order_by'))) {
            if ($request->get('ascending') == 1) {
                $list->orderBy($request->get('order_by'));
            } else {
                $list->orderByDesc($request->get('order_by'));
            }
        }
        if (!empty($request->get('category'))) {
            $list->where('category_id', '=', $request->get('category'));
        }
        $list->where('name', 'like', '%'.$pieces[0].'%');

        return response()->json(['data' => $list->paginate($request->get('limit', 0))]);
    }

    /**
     * api/{id}/products
     *
     * Returns company product based on id
     */
    public function companyIndex(Request $request, $id)
    {
        $limit = $request->get('limit', 0);

        $products = Product::where('company_id', $id)->with(['company' => function ($query) {
            $query->select('id', 'company_name', 'company_street', 'company_street_number', 'company_city');
        }])->paginate($limit);
        return response()->json(['data' => $products]);
    }

    /**
     * api/products/own
     *
     * Returns all currently user's company products
     */
    public function ownIndex(Request $request)
    {
        $companyId = Auth::user()->company->id;

        $limit = $request->get('limit', 0);

        $products = Product::where('company_id', $companyId)->with(['company' => function ($query) {
            $query->select('id', 'company_name', 'company_street', 'company_street_number', 'company_city');
        }])->paginate($limit);
        return response()->json(['data' => $products]);
    }

    /**
     * api/products
     *
     * Stores new Product
     *
     * @bodyParam  name string required
     * @bodyParam  short_description string required
     * @bodyParam  long_description string optional
     * @bodyParam  price integer required null if type 0
     * @bodyParam  type integer required 0,1,2
     */
    public function store(ProductStoreRequest $psr)
    {
        $companyId = Auth::user()->company->id;
        $categoryId = Auth::user()->company->category->id;

        $product = Product::create([
            'name' => $psr->get('name'),
            'short_description' => $psr->get('short_description'),
            'long_description' => $psr->get('long_description', null),
            'price' => $psr->get('price', null),
            'type' => $psr->get('type'),
            'company_id' => $companyId,
            'category_id' => $categoryId,
        ]);

        return response()->json(['data' => [
            'message' => "Pomyslnie dodano produkt"
        ]]);
    }

    /**
     * api/products/{id}
     *
     * Updates Product
     *
     * @queryParam id integer required
     * @bodyParam  name string required
     * @bodyParam  short_description string required
     * @bodyParam  long_description string optional
     * @bodyParam  price integer required null if type 0
     * @bodyParam  type integer required 0,1,2
     */
    public function update(ProductUpdateRequest $pur, $id)
    {
        $product = Product::findOrFail($id);

        $product->update([
            'name' => $pur->get('name', $product->name),
            'short_description' => $pur->get('short_description', $product->short_description),
            'long_description' => $pur->get('long_description', $product->long_description),
            'price' => $pur->get('price', $product->price),
            'type' => $pur->get('type', $product->type),
        ]);

        return response()->json(['data' => [
            'message' => "Pomyslnie zaktualizowano produkt"
        ]]);
    }

    /**
     * api/products/{id}/rate
     *
     * Rates Product
     *
     * @queryParam id integer required
     * @bodyParam  rate integer required between 1 and 5
     */
    public function rate(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $request->validate([
            'rate' => 'required|integer|min:1|max:5'
        ]);

        $rate = $request->get('rate');

        $productRate = $product->rating;
        $productRateAmount = $product->rating_amount;

        $product->update([
            'rating' => (($productRate * $productRateAmount) + $rate) / ($productRateAmount + 1),
            'rating_amount' => $productRateAmount + 1
        ]);
        return response()->json(['data' => [
            'message' => "Pomyslnie zaktualizowano produkt"
        ]]);


    }
}
