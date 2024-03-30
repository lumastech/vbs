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
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('route_name_id');
            $table->foreignId('vehicle_id');
            $table->foreignId('station_id');
            $table->string('seat_number')->nullable();
            $table->string('departure_date')->nullable();
            $table->string('name');
            $table->string('phone', 15);
            $table->string('nrc')->nullable();
            $table->string('gender')->nullable();
            $table->string('age')->nullable();
            $table->string('insurance')->default(null);
            $table->string('nok_name')->nullable();
            $table->string('nok_phone')->nullable();
            $table->string('nok_name_2', 15)->nullable();
            $table->string('nok_phone_2', 15)->nullable();
            $table->decimal('price', 8, 2)->nullable();
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
