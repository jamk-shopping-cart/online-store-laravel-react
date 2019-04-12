<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->increments('id');
            $table->string('model');
            $table->integer('price');
            $table->string('color');
            $table->string('material');
            $table->string('closure_method');
            $table->text('description');
            $table->string('imgUrl');
            // $table->integer('quantity')->default(0);
            $table->timestamps();
        });

        // DB::table('items')
        //     ->insert(array(
        //         array(
        //             'model' => 'Ecco Aurora',
        //             'price' => 100,
        //             'color' => 'Blue',
        //             'material' => 'Canvas',
        //             'closure_method' => 'Laces',
        //             'description' => 'Meet the ultimate Sunday sneaker. Its slip-on design and cushioned sole makes it perfect for relaxed days at home or on the go. Wear them with sweats, jeans, or anything, really. They\'re about to become your most versatile shoe.',
        //             'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/thumbnail.jpg',
        //             'created_at' => null,
        //             'updated_at' => null,
        //         ),
        //         array(
        //             'model' => 'Bugatti Tazzio',
        //             'price' => 115,
        //             'color' => 'Silver',
        //             'material' => 'Leather',
        //             'closure_method' => 'Laces',
        //             'description' => 'For a sneaker to join your lineup, it’s got to offer something groundbreaking. This lightweight sneaker’s elevated style will have you steady stepping without the sluggish bulk.',
        //             'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/thumbnail-3.jpg',
        //             'created_at' => null,
        //             'updated_at' => null,
        //         ),
        //     ));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
}
