<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;

class Sparco extends Model
{
    use HasFactory;

    public function initiatePayment($uniqueOrderNumber,$currency,$amount,$transactionName,$customerFirstName,$customerLastName,$customerEmail,$customerPhone): array
    {

        try {
            $response = Http::withHeaders([
                'Content-Type' => 'application/json',
            ])->post('https://checkout.broadpay.io/gateway/api/v1/checkout', [
                "transactionName" => $transactionName,
                "amount" => $amount,
                "currency" => $currency,
                "transactionReference" => $uniqueOrderNumber,
                "customerFirstName" => $customerFirstName,
                "customerLastName" => $customerLastName,
                "customerEmail" => $customerEmail,
                "customerPhone" => $customerPhone,
                "merchantPublicKey" => env('SPARCO_MERCHANT_PUBLIC_KEY')
            ]);

            if ($response->status() === 200) {


                if($response->body() == "error code: 504")
                {
                    return ['success'=>false,'error'=> 'We couldn\'t get a response from the server. Please try again later.' ];
                }

                if(json_decode($response->body())->isError)
                {
                    return ['success'=>false,'error'=>json_decode($response->body())->message];

                }
                elseif (!json_decode($response->body())->isError)
                {
                    return ['success'=>true,'url'=>json_decode($response->body())->paymentUrl];
                }
                else
                {
                    return ['success'=>false,'error'=> 'Something went wrong. Please try again later.' ];
                }

            } else {
                return ['success'=>false,'error'=> 'We received an unexpected response from the payment serve, please try again in a little while.' ];
            }
        } catch (\Exception $e) {
            return ['success'=>false,'error'=> 'Something went wrong. Please try again later.' ];
        }
    }
}
