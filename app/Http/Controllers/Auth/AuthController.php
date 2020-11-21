<?php


namespace App\Http\Controllers\Auth;


use App\Helpers\SlugHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\Company;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/**
 * @group Auth
 *
 * Authorization endpoints
 */

class AuthController extends Controller {

    /**
     * api/auth/login
     *
     * Login user using credentials
     *
     * @bodyParam email email required
     * @bodyParam password string required
     */
    public function login(Request $request){
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        $credentials = request(['email', 'password']);
        if(!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);

        $user = $request->user();

        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();
        return response()->json([
            'data' => [
                'access_token' => 'Bearer '.$tokenResult->accessToken,
                'expires_at' => Carbon::parse(
                    $tokenResult->token->expires_at
                )->toDateTimeString()
            ]
        ]);
    }
    /**
     * api/auth/register
     *
     * Registers new user
     * If company_* fields are provided it also creates company profile, and user's optional fields are unnecessary
     *
     * @bodyParam  name string required
     * @bodyParam  surname string required
     * @bodyParam  phone string optional DO NOT USE IF ITS COMPANY PROFILE
     * @bodyParam  street string optional DO NOT USE IF ITS COMPANY PROFILE
     * @bodyParam  street_number string optiona lDO NOT USE IF ITS COMPANY PROFILE
     * @bodyParam  city string optional DO NOT USE IF ITS COMPANY PROFILE
     * @bodyParam  postal string optional DO NOT USE IF ITS COMPANY PROFILE
     * @bodyParam  email email required
     * @bodyParam  password string required
     * @bodyParam  password_confirmation string required
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
     */
    public function register(Request $request){
        $request->validate([
            'name' => 'required|string',
            'surname' => 'required|string',
            'phone' => 'nullable|string',
            'street' => 'nullable|string',
            'street_number' => 'nullable|string',
            'city' => 'nullable|string',
            'postal' => 'nullable|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed',
        ]);



        $user = new User([
            'name' => $request->get('name'),
            'surname' => $request->get('surname'),
            'phone' => $request->get('phone'),
            'street' => $request->get('street',null),
            'street_number' => $request->get('street_number',null),
            'city' => $request->get('city', null),
            'postal' => $request->get('postal', null),
            'email' => $request->get('email'),
            'password' => bcrypt($request->get('password')),
        ]);

        $user->save();
        if(!empty($request->get('company_nip'))){
            $request->validate([
                'company_nip' => 'required|integer',
                'company_name' => 'required|string',
                'company_phone' => 'required|string',
                'company_street' => 'required|string',
                'company_street_number' => 'required|string',
                'company_city' => 'required|string',
                'company_postal' => 'required|string',
                'company_description' => 'required|string',
                'company_slogan' => 'nullable|string',
                'category_id' => 'required|integer',
            ]);

            $company = new Company([
                'company_nip' => $request->get('company_nip'),
                'company_name' => $request->get('company_name'),
                'company_slug' => SlugHelper::nameToSlug($request->get('company_name')),
                'company_phone' => $request->get('company_phone'),
                'company_street' => $request->get('company_street'),
                'company_street_number' => $request->get('company_street_number'),
                'company_city' => $request->get('company_city'),
                'company_postal' => $request->get('company_postal'),
                'company_description' => $request->get('company_description'),
                'company_slogan' => $request->get('company_slogan', null),
                'user_id' => $user->id,
                'category_id' => $request->get('category_id')
            ]);

            $company->save();
        }

        return response()->json([
            'message' => 'Successfully created user!'
        ], 200);
    }


    /**
     * api/logout
     *
     * removes token from database disabling login possibility
     *
     */
    public function logout(Request $request){
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    /**
     * api/me
     *
     * return user data based on sended token
     */
    public function me(){
        return response()->json(['data' => ['user' => Auth::user()]]);
    }



}
