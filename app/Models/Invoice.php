<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'route',
        'method',
        'order_id',
        'payout_id',
        'amount',
        'isp',
        'recipient',
        'customer_id',
        'description',
    ];
}
