<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('plan_id');
            $table->string('amount')->default('0');
            $table->string('order_number')->unique();
            $table->string('transaction_id');
            $table->string('tx_ref')->nullable();
            $table->string('order_ref')->nullable();
            $table->string('flw_ref')->nullable();
            $table->string('name')->nullable();
            $table->string('email');
            $table->string('phone');
            $table->string('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
