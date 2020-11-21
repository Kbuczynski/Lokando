<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use http\Env\Response;
use Illuminate\Http\Request;

/**
 * @group Category
 *
 * Categories Managment
 */

class CategoryController extends Controller
{
    /**
     * api/categories
     *
     * Return list of categories
     */

    public function index(Request $request){
        $limit = $request->get('limit', 0);

        $categories = Category::paginate($limit);
        return response()->json($categories);
    }
}
