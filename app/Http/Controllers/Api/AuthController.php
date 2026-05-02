<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
// use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'pin' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || $user->pin !== $request->pin) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid credentials'
            ], 401);
        }

        // create token (VERY IMPORTANT for your app)
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'status' => true,
            'message' => 'Login successful',
            'user' => $user,
            'token' => $token
        ]);
    }


     public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'fullName' => 'required|string|max:255',
            'phoneNumber' => 'required|string|max:255',
            'department' => 'required|string|max:255',
            'level' => 'nullable|string|max:255',
            'matNo' => 'required|string|unique:users',
            'pin' => 'nullable|string|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:3',
            'role' => 'nullable|in:admin,voter',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $user = User::create([
            'fullName' => $request->fullName,
            'phoneNumber' => $request->phoneNumber,
            'department' => $request->department,
            'level' => $request->level,
            'matNo' => $request->matNo,
            'pin' => $request->pin,
            'email' => $request->email,
            // 'role' => $request->role,
            'password' => Hash::make($request->password),
              // ✅ ONLY hash if password is provided

        ]);

        return response()->json([
            'status' => true,
            'message' => 'User registered successfully',
            'data' => $user
        ]);
    }
    
}