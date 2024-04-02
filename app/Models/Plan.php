<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'price',
        'bedrooms',
        'bathrooms',
        'levels',
        'style',
        'roof_finish',
        'wall_finish',
        'area',
        'description',
        'status',
        
        'image_1',
        'image_2',
        'image_3',
        'image_4',
        'image_5',
        'image_6',
        'image_7',
        'video',

        'file_1',
        'file_2',
        'file_3',
        'file_4',
        'file_5',
        'file_6',
    ];
}
