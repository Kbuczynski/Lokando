<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => [
        'auth:api',
    ],
], function() {
    Route::apiResource('/user', 'Api\UserController')->only(['update']);
});

