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

        DB::table('users')->insert(array(
            array(
                'name' => 'Dmitry',
                'email' => 'dm.sklyarov@icloud.com',
                'email_verified_at' => null,
                'password' => '$2y$10$mqmEp9I0NDqEj6DOLt/PSuC2dRLLnft8UOcQKefo9GmgHh2DWrVSq',
                'api_token' => 'dwQ19RW20GWCPPHHVMchsAXxhzXHrACAI3cFTpJXZEMvetAreuZMVFREIjzZ',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ),
            array(
                'name' => 'Leevi',
                'email' => 'leevi.kukkonen@hotmail.com',
                'email_verified_at' => null,
                'password' => '$2y$10$GfHdMrIxYkUCLXYUZjxbZuklZ4ForX/Hwse8hBJFCUlbKveKsdLdm',
                'api_token' => 'tJtH8AtOZP3OJmoUsXoBD5cAyoTFDJVtBfjyASlSP0sbPC7BtxXQ7ud2SAOb',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ),
            array(
                'name' => 'Ari',
                'email' => 'ari.rantala@jamk.fi',
                'email_verified_at' => null,
                'password' => '$2y$10$xSCy8yUYBfoWDVadm49BneQWPJB1iHp0kpF7sfICLTUvH4L/hQE.u',
                'api_token' => 'XLytkYqoW8WlKfwFpWW4pZdnEbfVbJd95q0EEGMKFExsWofj4Ir0cAmytGyX',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ),
        ));
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
