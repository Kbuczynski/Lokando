<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = [
        'company_nip',
        'company_name',
        'company_surname',
        'company_phone',
        'company_street',
        'company_street_number',
        'company_city',
        'company_postal',
        'company_description',
        'company_slogan',
        'user_id'
    ];

    protected $hidden = [
        'user_id'
    ];


}
