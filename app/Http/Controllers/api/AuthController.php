<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\SignupRequest; 

class AuthController extends Controller
{   

    public function signup(SignupRequest $request){
       /** \App\Models\User $user */ 
        $data = $request->validated();
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token')); 
    }

    public function login(LoginRequest $request){
        $credentials = $request->validate();
        if(!Auth:: attempt($credentials)){
            return response([
                'message' => 'Provided email address or password is incorrect'
            ]); 
        }
        /** User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user','token'));
    }
    
    public function logout(Request $request){
       $user = $request->user();
       $user->currectAccessToken()->delete();
       return response('', 204); 
    }
}
