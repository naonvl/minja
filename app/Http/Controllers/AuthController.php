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

        $user = User::where('username', $request->input('username'))->with('employee')->first();

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
        $clientRules = [
            [
                'action' => 'read',
                'subject' => 'AclDemo',
            ],
        ];
        $adminRules = [
            [
                'action' => 'manage',
                'subject' => 'all',
            ],
        ];

        return response()->json([
            'accessToken' => $token,
            'token_type' => 'Bearer',
            'userData' => $user,
            'userAbilityRules' => $user->user_type == 'admin' ? $adminRules : $clientRules,
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

    public function forgotPassword(Request $request)
    {
        $request->validate([
            'username
            ' => 'required|username
            ',
        ]);

        $user = User::where('username
        ', $request->input('username'))->first();

        if (!$user) {
            return response()->json(
                [
                    'error' => 'User not found',
                    'message' => 'username tidak ditemukan.',
                ],
                404,
            );
        }

        $token = Str::random(60);

        DB::table('password_resets')->insert([
            'email' => $user->email,
            'token' => $token,
            'created_at' => Carbon::now()
        ]);

        Mail::to($user->email)->send(new PasswordResetMail($token));

        return response()->json(
            [
                'message' => 'Link reset password telah dikirim ke email Anda.',
            ],
            200,
        );
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'token' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|string|confirmed',
            'password_confirmation' => 'required|string',
        ]);

        $passwordReset = DB::table('password_resets')->where([
            'email' => $request->input('email'),
            'token' => $request->input('token'),
        ])->first();

        if (!$passwordReset) {
            return response()->json(
                [
                    'error' => 'Invalid token',
                    'message' => 'Token tidak valid.',
                ],
                401,
            );
        }

        $user = User::where('email', $request->input('email'))->first();

        $user->password = Hash::make($request->input('password'));
        $user->save();

        DB::table('password_resets')->where('email', $request->input('email'))->delete();

        return response()->json(
            [
                'message' => 'Password berhasil direset.',
            ],
            200,
        );
    }
    
}
