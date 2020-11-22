<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => [
        'auth:api',
    ],
], function() {
    Route::get('{id}/products', 'Api\ProductController@companyIndex');
    Route::get('products/own', 'Api\ProductController@ownIndex');
    Route::post('products', 'Api\ProductController@store');
    Route::post('products/search', 'Api\ProductController@search');
    Route::put('products/{id}', 'Api\ProductController@update');
    Route::put('products/{id}/rate', 'Api\ProductController@rate');

});

Route::get('products', 'Api\ProductController@index');

