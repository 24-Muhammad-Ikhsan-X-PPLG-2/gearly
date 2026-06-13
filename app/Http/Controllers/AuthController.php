<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login()
    {
        return Inertia::render("auth/login");
    }
    public function loginP(LoginRequest $req)
    {
        $cred = $req->safe()->only([
            'email',
            'password',
        ]);
        $remember = $req->boolean('remember');
        if (!Auth::attempt($cred, $remember)) {
            return response()->json([
                'success' => false,
                'field' => [
                    'email' => [
                        "Email or password invalid."
                    ],
                    'password' => ["Email or password invalid."]
                ]
            ], 400);
        }
        $req->session()->regenerate();
        return response()->json([
            'success' => true,
            'field' => null,
        ]);
    }
}
