<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'company_id',
        'status',
        'type',
    ];

    protected $with = ['products'];

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function company(){
        return $this->belongsTo(Company::class);
    }

    public function products(){
        return $this->belongsToMany(Product::class, 'product_order');
    }
}
