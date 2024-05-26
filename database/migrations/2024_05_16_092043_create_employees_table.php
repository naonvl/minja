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
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->foreignId('departement_id')->constrained('data_masters');
            $table->foreignId('user_id')->constrained('users');
            $table->boolean('status')->default(1);
            $table->string('fullname');
            $table->timestamps();
        });
        // Schema::create('salaries', function (Blueprint $table) {
           
        //     $table->foreignId('employee_id')->constrained('employees');
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
