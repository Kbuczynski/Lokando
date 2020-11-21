<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use http\Env\Response;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(Request $request){
        $limit = $request->get('limit', 0);

        $categories = Category::paginate($limit);
        return response()->json(env("APP_URL"));
//        return response()->json($_ENV);
        return response()->json($categories);
    }
}
