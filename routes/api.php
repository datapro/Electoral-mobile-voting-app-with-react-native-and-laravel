<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CandidateController;
use App\Http\Controllers\Api\VoteController; 

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);


Route::get('/allcandidate', [CandidateController::class, 'allcandidate']);

Route::put('/candidates/{id}', [CandidateController::class, 'update']);
Route::delete('/allcandidate/{id}', [CandidateController::class, 'destroy']);
Route::post('/store', [CandidateController::class, 'store']);
Route::get('/results', [VoteController::class, 'results']);
Route::middleware('auth:sanctum')->post('/vote', [VoteController::class, 'vote']);
Route::middleware('auth:sanctum')->get('/me', [VoteController::class, 'me']);
Route::get('/allvoters', [VoteController::class, 'allvoters']);
Route::put('/allvoters/{id}', [VoteController::class, 'update']);
Route::delete('/allvoters/{id}', [VoteController::class, 'destroy']);


Route::get('/test', function () {
    return response()->json(['message' => 'API working']);
});