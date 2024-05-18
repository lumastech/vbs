<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'ref_id',
        'image',
        'status'
    ];

    public function plan() {
        return $this->belongsTo(Plan::class, 'ref_id');
    }
}
