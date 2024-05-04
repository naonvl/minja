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
        Schema::create('activities', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('task_type_id');
            $table->unsignedBigInteger('product_type_id');
            $table->unsignedBigInteger('brand_id');
            $table->integer('qty');
            $table->string('status');
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('task_type_id')->references('id')->on('task_types');
            $table->foreign('product_type_id')->references('id')->on('product_types');
            $table->foreign('brand_id')->references('id')->on('brands');
            $table->index(['user_id', 'task_type_id', 'product_type_id', 'brand_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activities');
    }
};
