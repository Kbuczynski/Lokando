<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => [
        'auth:api',
    ],
], function() {
    Route::put('/company', 'Api\CompanyController@update');
});

Route::get('/company/latest', 'Api\CompanyController@latestCompanies');
