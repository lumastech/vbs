<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'vehicle_id',
        'route_name_id',
        'seat_number',
        'departure_date',
        'station_id',
        'name',
        'phone',
        'nrc',
        'gender',
        'age',
        'insurance',
        'nok_name',
        'nok_phone',
        'nok_name_2',
        'nok_phone_2',
        'price',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function routeName()
    {
        return $this->belongsTo(RouteName::class);
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }
}
