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
            $table->string('tipe_master_data', 100)->nullable()->default('')->index();
            $table->dropColumn('master_type_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('data_masters', function (Blueprint $table) {
            $table->dropColumn('tipe_master_data');
            $table->foreignId('master_type_id')->constrained('master_types');
        });
    }
};
