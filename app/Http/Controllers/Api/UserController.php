<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function update(User $user, UserUpdateRequest $uur) : UserResource {
        return response()->json($data = [
            'a' => $user,
            'b' => $uur,
        ]);
    }
}
