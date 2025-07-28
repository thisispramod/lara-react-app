<?php

use Illuminate\Support\Facades\Route; 
use App\Http\Controllers\api\AuthController;

// Example protected route with Sanctum or Passport
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Example public route     
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login',[AuthController::class,'login']);
Route::post('/logout',[AuthController::class,'logout']);