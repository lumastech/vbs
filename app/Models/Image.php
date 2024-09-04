<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'ref_id',
        'image',
        'type',
        'status'
    ];

    public function plan() {
        return $this->belongsTo(Plan::class, 'ref_id');
    }
}
