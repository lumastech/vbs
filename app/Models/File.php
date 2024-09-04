<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

     protected $fillable = [
        'name',
        'ref_id',
        'file',
        'type',
        'status'
    ];

    public function plan() {
        return $this->belongsTo(Plan::class, 'ref_id');
    }
}
