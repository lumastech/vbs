<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    public function plan(){
        return $this->belongsTo(Plan::class);
    }

    protected $fillable = [
        'plan_id',
        'amount',
        'order_number',
        'transaction_id',
        'tx_ref',
        'order_ref',
        'flw_ref',
        'name',
        'email',
        'phone',
        'status'
    ];
}
