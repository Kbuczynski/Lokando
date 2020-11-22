<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('short_description', 200);
            $table->text('long_description')->nullable();
            $table->unsignedFloat('price')->nullable();
            $table->unsignedInteger('type')->default(0)->comment('0-usluga, 1-product, 2-delivery');
            $table->unsignedFloat('rating')->default(0);
            $table->unsignedInteger('rating_amount')->default(0);
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('company_id');
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
