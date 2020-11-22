<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    $usluga = random_int(1,10) == 1;
    return [
        'name' => $faker->words(3, true),
        'short_description' => $faker->text(200),
        'long_description' => $faker->text(500),
        'price' => $usluga == true ? null : random_int(1,20000),
        'type' => $usluga == true ? 0 : random_int(1,2),
        'rating' => (mt_rand() / mt_getrandmax()) * 5,
        'rating_amount' => random_int(1,100),
        'company_id' => random_int(1,5),
        'category_id' => random_int(1,10),
    ];
});
