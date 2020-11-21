<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

/**
 * @group Users
 *
 * Users Managment
 */
class UserController extends Controller
{

    /**
     * api/user
     *
     * Updates user
     *
     * @bodyParam  name string required
     * @bodyParam  surname string required
     * @bodyParam  phone string optional DO NOT USE IF ITS COMPANY PROFILE
     * @bodyParam  street string optional DO NOT USE IF ITS COMPANY PROFILE
     * @bodyParam  street_number string optional lDO NOT USE IF ITS COMPANY PROFILE
     * @bodyParam  city string optional DO NOT USE IF ITS COMPANY PROFILE
     * @bodyParam  postal string optional DO NOT USE IF ITS COMPANY PROFILE
     * @bodyParam  email email required
     */
    public function update(User $user, UserUpdateRequest $uur)  {
        if($user->company) {
            return response()->json(['data' => [
                'messages' => 'User has company, use different endpoint'
            ]], 403);
        }

        $user->update([
            'name' => $uur->get('name', $user->name),
            'surname' => $uur->get('surname', $user->surname),
            'phone' => $uur->get('phone', $user->phone),
            'street' => $uur->get('street', $user->street),
            'street_number' => $uur->get('street_number', $user->street_number),
            'city' => $uur->get('city', $user->city),
            'postal' => $uur->get('postal', $user->postal),
            'email' => $uur->get('email', $user->email),
        ]);

        return response()->json(['data' => [
            'messages' => 'User updated'
        ]], 200);
    }
}
