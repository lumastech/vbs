<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;
    protected $fillable = [
        "transactionName",
        "amount",
        "currency",
        "transactionReference",
        "customerFirstName",
        "customerLastName",
        "customerEmail",
        "customerPhone",
        "customerAddr",
        "customerCity",
        "customerState",
        "customerCountryCode",
        "customerPostalCode",
        "merchantPublicKey",
        "webhookUrl",
        "payment_link",
        "autoReturn",
        "plan_id",
        "message",
        "status",

        "feeAmount",
        "transactionAmount",
        "customerMobileWallet",
        "feePercentage",
        "signature",
        "isError",
        "merchantReference",
        "signedFields",
        "comment",
        "returnUrl",
        "reference"
    ];


    public function plan(){
        return $this->belongsTo(Plan::class);
    }
}
