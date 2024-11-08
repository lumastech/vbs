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
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->string('route');
            $table->enum('method', ['POST', 'GET', 'PUT', 'DELETE'])->default('POST');
            $table->unsignedBigInteger('order_id');
            $table->unsignedBigInteger('payout_id');
            $table->decimal('amount', 15, 2);
            $table->string('isp');
            $table->string('recipient');
            $table->string('customer_id');
            $table->text('description')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
