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
        Schema::create('vendor_returns', function (Blueprint $table) {
            $table->id();
            $table->string('purchase_invoice');
            $table->dateTime('return_date');
            $table->unsignedBigInteger('product_id');
            $table->decimal('quantity',10,2);
            $table->string('reason',255);
            $table->enum('refund',['pending','complete']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vendor_returns');
    }
};
