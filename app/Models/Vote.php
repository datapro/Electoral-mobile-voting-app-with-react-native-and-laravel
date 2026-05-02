<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\CandidateModel;

class Vote extends Model
{
    protected $fillable = ['user_id', 'candidate_id'];

    public function candidate()
    {
        return $this->belongsTo(CandidateModel::class, 'candidate_id');
    }
}