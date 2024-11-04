<?php
namespace App\Models;
use Illuminate\Http\Request;
use Jenssegers\Agent\Facades\Agent;
class Utility{
    public function countVisitors(Request $request) {
        try {
            if (!Visitor::where('ip', $request->ip())->first()) {
                $visitor = new Visitor();

                $visitor->ip = $request->ip();
                $visitor->device_os = Agent::platform();
                $visitor->device_os_version = Agent::version(Agent::platform());
                $visitor->device_type = Agent::isDesktop()? 'desktop': 'mobile';
                $visitor->browser = Agent::browser();
                $visitor->browser_version = Agent::version(Agent::browser());
                $visitor->save();
            }
        } catch (\Throwable $th) {
            // return $th;
        }
    }

    function audit($type, $amount, $description) {
        $trans = new Transaction();

        $trans->user_id = \auth()->user()->id;
        $trans->amount = $amount;
        $trans->type = $type;
        $trans->description = $description;

        $trans->save();
    }

    public function pawapay($route, $method= 'POST', $orderId, $payoutId,  $amount, $isp, $recipient, $customerId, $description= 'Subscription' ) {
        $payoutData = [
            "payoutId" => $payoutId,
            "amount" => $amount,
            "currency" => "ZMW",
            "country" => "ZMB",
            "correspondent" => $isp,
            "recipient" => [
                "type" => "MSISDN",
                "address" => [
                    "value" => $recipient
                ]
            ],
            "customerTimestamp" => date('Y-m-d\TH:i:s\Z'),
            "statementDescription" => $description,
            "metadata" => [
                [
                    "fieldName" => "orderId",
                    "fieldValue" => $orderId
                ],
                [
                    "fieldName" => "customerId",
                    "fieldValue" => $customerId,
                    "isPII" => true
                ]
            ]
        ];
        return [
            CURLOPT_URL => "https://api.sandbox.pawapay.io/".$route,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => $method,
            CURLOPT_POSTFIELDS => json_encode($payoutData),
            CURLOPT_HTTPHEADER => [
                "Authorization: Bearer ".\env("PAWAPAY_KEY"),
                "Content-Type: application/json"
            ],
        ];
    }
}