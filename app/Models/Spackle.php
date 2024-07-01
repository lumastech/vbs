<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Invoice;
use Illuminate\Support\Facades\Http;

class Spackle extends Model
{
    use HasFactory;

    public function initiatePayment(Invoice $invoice): array
    {

        try {
            $response = Http::withHeaders([
                'Content-Type' => 'application/json',
            ])->post('https://checkout.broadpay.io/gateway/api/v1/checkout', [
                "amount" => $invoice->amount,
                "currency" => $invoice->currency,
                "customerEmail" => $invoice->customerEmail,
                "customerFirstName" => $invoice->customerFirstName,
                "customerLastName" => $invoice->customerLastName,
                "customerPhone" => $invoice->customerPhone,
                "merchantPublicKey" => env('SPARCO_PUBLIC_KEY'),
                "transactionName" => $invoice->transactionName,
                "transactionReference" => $invoice->transactionReference,
                "wallet" => $invoice->customerPhone,
                "chargeMe" => true,
                "returnUrl" => '',
                "autoReturn" => false
            ]);

            if ($response->status() === 200) {


                if($response->body() == "error code: 504") {
                    return ['success'=>false,'error'=> 'We couldn\'t get a response from the server. Please try again later.' .$response->status() ];
                }

                if(json_decode($response->body())->isError) {
                    return ['success'=>false,'error'=>json_decode($response->body())->message];

                }

                elseif (!json_decode($response->body())->isError)  {
                    return ['success'=>true,'url'=>json_decode($response->body())->paymentUrl, 'reference'=>json_decode($response->body())->reference];
                }

                else {
                    return ['success'=>false,'error'=> 'Something went wrong. Please try again later.' ];
                }

            } else {
                return ['success'=>false,'error'=> 'We received an unexpected response from the payment serve, please try again in a little while. ' ];
            }
        } catch (\Exception $e) {
            return ['success'=>false,'error'=> 'Something went wrong. Please try again later.' ];
        }
    }

    function paymentStatus($reference, $merchantReference) {

        try{
            $response = Http::withHeaders([
                'Content-Type' => 'application/json',
            ])->post('https://live.sparco.io/gateway/api/v1/transaction/query?reference='.$reference.'&merchantReference='.$merchantReference, [
                "pubKey" => env('SPARCO_PUBLIC_KEY')
            ]);

            if ($response->status() === 200) {

                if($response->body() == "error code: 504") {
                    return ['success'=>false,'error'=> 'We couldn\'t get a response from the server. Please try again later.' .$response->status() ];
                }

                if(json_decode($response->body())->isError) {
                    return ['success'=>false,'error'=>json_decode($response->body())->message];
                } elseif (!json_decode($response->body())->isError) {
                    return ['success'=>true,'url'=>json_decode($response->body())->paymentUrl];
                } else {
                    return ['success'=>false,'error'=> 'Something went wrong. Please try again later.' ];
                }
            } else {
                return ['success'=>false,'error'=> 'We received an unexpected response from the payment serve, please try again in a little while. ' ];
            }
        }catch (\Exception $e) {
            return ['success'=>false,'error'=> 'Something went wrong. Please try again later.' ];
        }
    }
}
