<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Company
 *
 * @property int $id
 * @property int $company_nip
 * @property string $company_name
 * @property string $company_slug
 * @property string $company_phone
 * @property string $company_street
 * @property string $company_street_number
 * @property string $company_city
 * @property string $company_postal
 * @property string $company_description
 * @property string|null $company_slogan
 * @property int $category_id
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Category $category
 * @method static \Illuminate\Database\Eloquent\Builder|Company newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Company newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Company query()
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereCompanyCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereCompanyDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereCompanyName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereCompanyNip($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereCompanyPhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereCompanyPostal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereCompanySlogan($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereCompanySlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereCompanyStreet($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereCompanyStreetNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereUserId($value)
 * @mixin \Eloquent
 */
class Company extends Model
{
    protected $fillable = [
        'company_nip',
        'company_name',
        'company_slug',
        'company_surname',
        'company_phone',
        'company_street',
        'company_street_number',
        'company_city',
        'company_postal',
        'company_description',
        'company_slogan',
        'user_id',
        'category_id'
    ];

    protected $hidden = [
        'user_id', 'category_id'
    ];

    protected $with = ['category'];

    public function category(){
        return $this->belongsTo('App\Models\Category');
    }


}
