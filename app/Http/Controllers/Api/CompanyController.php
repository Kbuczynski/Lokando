<?php

namespace App\Http\Controllers\Api;

use App\Helpers\SlugHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyUpdateRequest;
use App\Models\Company;
use App\Models\CompanyContact;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


/**
 * @group Company
 *
 * Company managment
 */
class CompanyController extends Controller
{

    /**
     * api/company
     *
     * Updates company
     *
     * @bodyParam  name string required
     * @bodyParam  surname string required
     * @bodyParam  email email required
     * @bodyParam  company_nip integer required
     * @bodyParam  company_name string required
     * @bodyParam  company_phone string required
     * @bodyParam  company_street string required
     * @bodyParam  company_street_number string required
     * @bodyParam  company_city string required
     * @bodyParam  company_postal string required
     * @bodyParam  company_description string required
     * @bodyParam  company_slogan string optional
     * @bodyParam  category_id integer required
     * @bodyParam  company_contacts array optional [name-string, contact-string]

     */
    public function update(CompanyUpdateRequest $cur){
        $company = Auth::user();
        if(!$company->is_company) {
            return response()->json(['data' => [
                'messages' => 'User doesnt have company, use different endpoint'
            ]], 403);
        }


        $company->update([
            'name' => $cur->get('name', $company->name),
            'surname' => $cur->get('surname', $company->surname),
            'email' => $cur->get('email', $company->email),
        ]);

        $userCompany = $company->company;
        $userCompany->update([
            'company_nip' => $cur->get('company_nip', $userCompany->company_nip),
            'company_name' => $cur->get('company_name', $userCompany->company_name),
            'company_slug' => SlugHelper::nameToSlug($cur->get('company_name')),
            'company_phone' => $cur->get('company_phone', $userCompany->company_phone),
            'company_street' => $cur->get('company_street', $userCompany->company_street),
            'company_street_number' => $cur->get('company_street_number', $userCompany->company_street_number),
            'company_city' => $cur->get('company_city', $userCompany->company_city),
            'company_postal' => $cur->get('company_postal', $userCompany->company_postal),
            'company_description' => $cur->get('company_description', $userCompany->company_description),
            'company_slogan' => $cur->get('company_slogan', $userCompany->company_slogan),
            'category_id' => $cur->get('category_id', $userCompany->category_id),
        ]);

        $contacts = $cur->get('company_contacts', $userCompany->company_contacts);
        CompanyContact::where('company_id', $userCompany->id)->delete();
        foreach ($contacts as $contact){
            $cc = new CompanyContact([
                'name' => $contact['name'],
                'contact' => $contact['contact'],
                'company_id' => $userCompany->id,
            ]);
            $cc->save();
        }

        return response()->json(['data' => [
            'messages' => 'Company updated'
        ]], 200);
    }
}
