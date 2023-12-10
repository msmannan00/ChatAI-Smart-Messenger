<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\openaiMessenger;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/openai', [openaiMessenger::class, 'request']);
Route::post('/testapi', [openaiMessenger::class, 'test']);
