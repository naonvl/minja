<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            // $table->foreignId('assigner_id')->constrained('users');
            $table->foreignId('user_id')->constrained('users');
            $table->integer('status')->default(0);
            $table->integer('qty')->index();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('activities');
    }
};
