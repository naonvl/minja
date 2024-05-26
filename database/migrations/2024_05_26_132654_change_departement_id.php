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
        Schema::table('employees', function (Blueprint $table) {
            $table->dropForeign('employees_departement_id_foreign');
            $table->dropColumn('departement_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            // $table->dropForeign('employees_department_id_foreign');
            // $table->renameColumn('department_id', 'departement_id');
            // $table->foreign('departement_id')->references('id')->on('users');
        });
    }
};
