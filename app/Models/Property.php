<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'price',
        'address',
        'city',
        'state',
        'postal_code',
        'country',
        'bedrooms',
        'bathrooms',
        'square_feet',
        'lot_size',
        'property_type_id',
        'status'
    ];

    // Optionally, define the relationship with the PropertyImage model
    public function images()
    {
        return $this->hasMany(Image::class, 'ref_id')->where('type', 'property');
    }

    // Define the relationship with the Cart model
    public function cartItems()
    {
        return $this->hasMany(Cart::class)->where('type', 'property');
    }
}
