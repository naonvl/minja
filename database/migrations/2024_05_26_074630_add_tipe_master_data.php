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
        Schema::table('data_masters', function (Blueprint $table) {
            $table->string('type_master_data', 100)->nullable()->default('')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('data_masters', function (Blueprint $table) {
            $table->dropColumn('type_master_data');
        });
    }
};
