<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('api_token', 60)->unique();
            $table->rememberToken();
            $table->timestamps();
        });

        // DB::table('users')->insert(
        //     array(
        //         'name' => 'Dmitry',
        //         'email' => 'dm.sklyarov@icloud.com',
        //         'email_verified_at' => null,
        //         'password' => '?',
        //         'api_token' => '?',
        //         'created_at' => '2019-04-01 00:00:00',
        //         'updated_at' => '2019-04-01 00:00:00',
        //     )
        // );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
