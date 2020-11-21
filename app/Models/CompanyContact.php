<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\CompanyContact
 *
 * @property int $id
 * @property string $name
 * @property string $contact
 * @property int $company_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Company $company
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyContact newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyContact newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyContact query()
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyContact whereCompanyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyContact whereContact($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyContact whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyContact whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyContact whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyContact whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class CompanyContact extends Model
{
    protected $fillable = ['name', 'contact', 'company_id'];

    public function company(){
        return $this->belongsTo('App\Models\Company');
    }
}
