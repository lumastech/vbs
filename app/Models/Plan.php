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
    ];

    public function images() {
        return $this->hasMany(Image::class, 'ref_id')->where('type', 'plan');
    }
    public function files() {
        return $this->hasMany(Image::class, 'ref_id')->where('type', 'plan');
    }

     public function favorites()
    {
        return $this->hasMany(Favorite::class)->where('type', 'plan');
    }

    // Define the relationship with the Cart model
    public function cartItems()
    {
        return $this->hasMany(Cart::class)->where('type', 'plan');
    }
}
