<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\OrderStoreRequest;
use App\Models\Company;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

/**
 * @group Orders
 * Managing Orders
 */

class OrderController extends Controller
{
    /**
     * api/orders/{id}
     *
     * Creating new order
     *
     * @queryParam id integer required id of company
     * @bodyParam type integer required 1 - koszyki, 2 - jedzenie
     * @bodyParam products array required same id produktow
     */
    public function store(OrderStoreRequest $osr, $id){
        $user = Auth::user();

        if($user->is_company){
            return response()->json([
                'message' => 'Uzytkownik nie moze byc firma'
            ],403);
        }

        $company = Company::findOrFail($id);

        $order = Order::create([
            'user_id' => $user->id,
            'company_id' => $company->id,
            'status' => 0,
            'type' => $osr->get('type'),
        ]);

        $products = $osr->get('products');
        foreach($products as $product){
            DB::table('product_order')->insert([
                'product_id' => $product,
                'order_id' => $order->id,
            ]);
        }

        return response()->json([
            'message' => 'Zamowienie dodane'
        ]);


    }

    /**
     * api/orders/{id}
     *
     * @queryParam id integer required id of company
     * @bodyParam status integer required 0 - not taken, 1 - taken, 2 - done
     */
    public function changeStatus(Request $request, $id){
        $order = Order::findOrFail($id);

        $request->validate([
            'status' => 'required|integer|min:0|max:2',
        ]);

        $order->update([
           'status' =>  $request->get('status')
        ]);

        $order->save();

        return response()->json([
            'message' => 'Zamowienie zaktualizowane'
        ]);
    }
}
