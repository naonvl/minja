<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('role_id')->constrained('roles');
        });
        Schema::table('data_masters', function (Blueprint $table) {
            $table->foreignId('master_type_id')->constrained('master_types');
        });
        Schema::table('salaries', function (Blueprint $table) {
            $table->foreignId('product_id')->constrained('products');
            $table->foreignId('employee_id')->constrained('employees');
        });
        Schema::table('activities', function (Blueprint $table) {
            $table->foreignId('product_id')->constrained('data_masters');
            $table->foreignId('task_type_id')->constrained('data_masters');
            $table->foreignId('brand_id')->constrained('data_masters');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
