<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller
{
    /**
     * Login user and create token
     *
     * @param  [string] username
     * @param  [string] password
     * @param  [boolean] remember_me
     */

    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
            'remember_me' => 'boolean',
        ]);

        $user = User::where('username', $request->input('username'))->first();

        if (!$user) {
            return response()->json(
                [
                    'error' => 'User not found',
                    'message' => 'Nama pengguna tidak ditemukan.',
                ],
                404,
            );
        }

        if (!$user->status) {
            return response()->json(
                [
                    'error' => 'User disabled',
                    'message' => 'Akun Anda telah dinonaktifkan.',
                ],
                403,
            );
        }

        if (!Hash::check($request->input('password'), $user->password)) {
            return response()->json(
                [
                    'error' => 'Invalid password',
                    'message' => 'Kata sandi salah.',
                ],
                401,
            );
        }

        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->plainTextToken;
        $userAbilityRules = [
            [
                'action' => 'manage',
                'subject' => 'all',
            ],
        ];

        return response()->json([
            'accessToken' => $token,
            'token_type' => 'Bearer',
            'userData' => $user,
            'userAbilityRules' => $userAbilityRules,
        ]);
    }
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json(
            [
                'message' => 'Logged out successfully',
            ],
            200,
        );
    }
}
