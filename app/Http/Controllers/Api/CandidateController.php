<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CandidateModel;
use App\Models\Vote;
class CandidateController extends Controller
{
    //
    public function allcandidate()
        {
            $candidates = CandidateModel::orderBy('id', 'desc')->get();
            return response()->json($candidates);
        }

    
    public function store(Request $request)
        {
            $request->validate([
                'fullname' => 'required',
                'nickName' => 'required',
                'department' => 'required',
                'position' => 'required',
                'image' => 'required|image|max:2048',
            ]);

            // 📁 Save image
            $file = $request->file('image');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads'), $filename);

            // 💾 Save to DB
            $candidate = \App\Models\CandidateModel::create([
                'fullname' => $request->fullname,
                'nickName' => $request->nickName,
                'department' => $request->department,
                'position' => $request->position,
                'image' => 'uploads/' . $filename,
            ]);

            return response()->json([
                'status' => true,
                'data' => $candidate
            ]);
        }
        public function edit(){
            // 
        }
    public function update(Request $request, $id)
    {
        $candidate = CandidateModel::findOrFail($id);

        // update text fields
        $candidate->fullname = $request->fullname;
        $candidate->nickName = $request->nickName;
        $candidate->department = $request->department;
        $candidate->position = $request->position;

        // ✅ handle image upload
        if ($request->hasFile('image')) {

            // delete old image (optional but recommended)
            if ($candidate->image && file_exists(public_path($candidate->image))) {
                unlink(public_path($candidate->image));
            }

            $file = $request->file('image');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads'), $filename);

            $candidate->image = 'uploads/' . $filename;
        }

        $candidate->save();

        return response()->json([
            'message' => 'Candidate updated successfully',
            'data' => $candidate
        ]);
    }

    
    public function destroy($id)
{
    $candidate = CandidateModel::findOrFail($id);

    $candidate->delete();

    return response()->json([
        'message' => 'Deleted successfully'
    ]);
}
}
