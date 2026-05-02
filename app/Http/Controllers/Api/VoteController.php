<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Vote;
use App\Models\User;
use App\Models\CandidateModel;
use App\Models\Candidate;
use Illuminate\Support\Facades\Hash;


class VoteController extends Controller
{
    public function allvoters()
    {
        $allvoters = User::orderBy('id', 'desc')->get();
            return response()->json($allvoters);
    }


   public function vote(Request $request)
{
    $user = $request->user();

    if (!$user) {
        return response()->json([
            'message' => 'Unauthenticated'
        ], 401);
    }

    $request->validate([
        'candidate_id' => 'required|exists:candidate_models,id'
    ]);

    if (Vote::where('user_id', $user->id)->exists()) {
        return response()->json([
            'message' => 'You have already voted'
        ], 403);
    }

    Vote::create([
        'user_id' => $user->id,
        'candidate_id' => $request->candidate_id
    ]);

    return response()->json([
        'message' => 'Vote recorded'
    ]);
}

        // me voted 
   public function me(Request $request)
        {
            $user = $request->user();

            return response()->json([
                'has_voted' => Vote::where('user_id', $user->id)->exists(),
            ]);
        }

     
     
    public function update(Request $request, $id)
     {
        $allvoter = User::findOrFail($id);

        // update text fields
        $allvoter->fullName = $request->fullName;
        $allvoter->phoneNumber = $request->phoneNumber;
        $allvoter->department = $request->department;
        $allvoter->level = $request->level;
        $allvoter->matNo = $request->matNo;
        $allvoter->pin = $request->pin;
        $allvoter->email = $request->email;
        $allvoter->role = $request->role;
        
         // ✅ ONLY hash if password is provided
        if ($request->filled('password')) {
            $allvoter->password = Hash::make($request->password);
        }
       

        $allvoter->save();

        return response()->json([
            'message' => 'Voter updated successfully',
            'data' => $allvoter
        ]);
    }

    public function results()
    {

         return CandidateModel::withCount('votes')
        ->orderBy('votes_count', 'desc')
        ->get();

    }
        public function destroy($id)
    {
        $allvoters = User::findOrFail($id);

        $allvoters->delete();

        return response()->json([
            'message' => 'Deleted successfully'
        ]);
}
}
