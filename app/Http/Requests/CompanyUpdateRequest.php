<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class CompanyUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'surname' => 'required|string',
            'email' => 'required|string|email',
            'company_nip' => 'required|integer',
            'company_name' => 'required|string',
            'company_phone' => 'required|string',
            'company_street' => 'required|string',
            'company_street_number' => 'required|string',
            'company_city' => 'required|string',
            'company_postal' => 'required|string',
            'company_description' => 'required|string',
            'company_slogan' => 'nullable|string',
            'category_id' => 'required|integer|between:1,10',
        ];
    }
}
