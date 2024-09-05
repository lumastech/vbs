<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'amount', 'rate', 'term', 'loan_package_id', 'status', 'approved_by','purpose','notes'
    ];

}
