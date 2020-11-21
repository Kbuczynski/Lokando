<?php


namespace App\Http\Controllers\Auth;


use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\User;
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
            'user' => $user,
            'access_token' => 'Bearer '.$tokenResult->accessToken,
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);
    }
    /**
     * api/auth/register
     *
     * Registers new user
     *
     * @bodyParam  name string required
     * @bodyParam  surname string required
     * @bodyParam  phone string required
     * @bodyParam  street string optional
     * @bodyParam  street_number string optional
     * @bodyParam  city string optional
     * @bodyParam  postal string optional
     * @bodyParam  email email required
     * @bodyParam  password string required
     * @bodyParam  password_confirmation string required
     */
    public function register(Request $request){
        $request->validate([
            'name' => 'required|string',
            'surname' => 'required|string',
            'phone' => 'required|string',
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
