<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Route extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'from',
        'to',
        'user_id',
        'price',
        'status',
    ];

    // belongs to user
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
