<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => [
        'auth:api',
    ],
], function() {
    Route::post('orders/{id}', 'Api\OrderController@store');
    Route::put('orders/{id}', 'Api\OrderController@changeStatus');

});
