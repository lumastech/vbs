<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Spackle extends Controller
{
    //
    public function make_payment(string $id): array
    {
        $customerFirstName = "Jimmy";
        $customerLastName = "Kamanga";
        $customerEmail = Auth::user()->email ?? 'jimmykamanga@gmail.com';
        $customerPhone = "0977396223";


        $uniqueOrderNumber = $this->uniqueOrderId();
        $invoice = SalesInvoices::where('id',$id)->with('client','currenc')->first();
        $currency = $invoice->currenc->code;
        $transactionName = "Being payment for Invoice No.".$invoice->id;

        $maxAttempts = 3;
        $attempts = 0;
        $payment_process = [];


            try{
                $payment_process = (new Sparco)->initiatePayment($uniqueOrderNumber,$currency,$invoice->total,$transactionName,$customerFirstName,$customerLastName,$customerEmail,$customerPhone);
            }
            catch (Exception $error){
                $payment_process['error'] = $error;
            }

            if($payment_process['success'])
            {
                $invoice->payment_link = $payment_process['url'];
                $invoice->payment_ref = $uniqueOrderNumber;
                $invoice->save();
                return ['success'=>true,'url'=>$payment_process['url']];
            }

        return ['success'=>false,'error'=>$payment_process['error']];
    }
}
