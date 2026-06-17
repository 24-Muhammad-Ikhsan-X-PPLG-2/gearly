<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Laravel\Socialite\Socialite;

class AuthController extends Controller
{
    public function login()
    {
        return Inertia::render("auth/login");
    }
    public function register()
    {
        return Inertia::render("auth/register");
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
    public function redirectDC()
    {
        return Socialite::driver("discord")->redirect();
    }
    public function callbackDC()
    {
        $discordUser = Socialite::driver("discord")->user();
        $existsEmail = User::query()->where('email', $discordUser->getEmail())->first();
        $existsProviderId = User::query()->where('provider_id', $discordUser->getId())->first();
        if ($existsProviderId) {
            Auth::login($existsProviderId);
            return redirect('/dashboard');
        }
        if (!$existsEmail) {
            $user = User::query()->create([
                'name' => $discordUser->getName(),
                'email' => $discordUser->getEmail(),
                'provider' => 'discord',
                'provider_id' => $discordUser->getId(),
                'password' => Hash::make(bin2hex(random_bytes(16))),
            ]);
            Auth::login($user);
            return redirect('/dashboard');
        }
        return redirect("/auth/signin")->withErrors([
            'email' => "Email already in use."
        ]);
    }
}
