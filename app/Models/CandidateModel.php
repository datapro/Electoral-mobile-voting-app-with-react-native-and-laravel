<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Vote;

class CandidateModel extends Model
{
    protected $fillable = [
        'fullname',
        'nickName',
        'department',
        'position',
        'image',
    ];

    public function votes()
    {
        return $this->hasMany(Vote::class, 'candidate_id');
    }
}