<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompanyContact extends Model
{
    protected $fillable = ['name', 'contact', 'company_id'];

    public function company(){
        return $this->belongsTo('App\Models\Company');
    }
}
