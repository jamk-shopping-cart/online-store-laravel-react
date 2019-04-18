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

        DB::table('items')
            ->insert(array(
                array(
                    'model' => 'Ecco Aurora',
                    'price' => 100,
                    'color' => 'Blue',
                    'material' => 'Canvas',
                    'closure_method' => 'Laces',
                    'description' => 'Meet the ultimate Sunday sneaker. Its slip-on design and cushioned sole makes it perfect for relaxed days at home or on the go. Wear them with sweats, jeans, or anything, really. They\'re about to become your most versatile shoe.',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/thumbnail.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ),
                array(
                    'model' => 'Bugatti Tazzio',
                    'price' => 115,
                    'color' => 'Silver',
                    'material' => 'Leather',
                    'closure_method' => 'Laces',
                    'description' => 'For a sneaker to join your lineup, it’s got to offer something groundbreaking. This lightweight sneaker’s elevated style will have you steady stepping without the sluggish bulk.',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/thumbnail-3.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ),
                array(
                    'model' => 'Zenden Casual',
                    'price' => 60,
                    'color' => 'Blue',
                    'material' => 'Synthetic material / textile',
                    'closure_method' => 'Laces',
                    'description' => 'This neutral running shoe orthotic friendly and available in multiple widths. In this neutral running shoe, you\'ll be flying from your first step to your last.',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/thumbnail-5.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ),
                array(
                    'model' => 'Clarks Weaver',
                    'price' => 75,
                    'color' => 'Brown',
                    'material' => 'Suede leather',
                    'closure_method' => 'Laces',
                    'description' => 'A slip-resistant outsole keeps you safe on the jobsite, and the premium full-grain leather cleans up for the office.',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/thumbnail-4.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ),
                array(
                    'model' => 'Marwell Lace-Up',
                    'price' => 80,
                    'color' => 'Gray',
                    'material' => 'Textile',
                    'closure_method' => 'Laces',
                    'description' => 'This waterproof men\'s athletic shoe is slip and oil resistant with a rubber outsole. Featuring a non-metallic ASTM rated composite toe with leather and breathable mesh upper, the Eastfield is the perfect shoe for any off-the-bike activity.',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/thumbnail-2.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ),
                array(
                    'model' => 'Skechers Burst Atletics',
                    'price' => 110,
                    'color' => 'Black',
                    'material' => 'Synthetic',
                    'closure_method' => 'Laces',
                    'description' => 'Afordable athletic shoes for outside. With its light weight you will be sorry for using worse.',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/burstatletic.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ),
                array(
                    'model' => 'Cagney Oxfords Marrone',
                    'price' => 190,
                    'color' => 'Blown',
                    'material' => 'Leather',
                    'closure_method' => 'Laces',
                    'description' => 'Handmade in Italy, Cagney Oxfords feel and fit will outdo any other shoe you will use in sheer style and comfiness. With proper maintenance, these shoes will last a mans lifetime.',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/cagneyoxford.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ),
                array(
                    'model' => 'Clarks Tilden Walk',
                    'price' => 60,
                    'color' => 'Blown',
                    'material' => 'Leather',
                    'closure_method' => 'Laces',
                    'description' => 'Tilden Walk provides the most affordable price available for brown leather shoes, and quality is surprising. Qualifies for formal clothing.',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/clarksbrown.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ),
                array(
                    'model' => 'Converse Chuck 70',
                    'price' => 90,
                    'color' => 'White',
                    'material' => 'Canvas',
                    'closure_method' => 'Laces',
                    'description' => 'The classic unisex design has never feeled better. The new Converse Chuck sports thicker insole and wing tongue stitching for maximum style and comfiness. No reason to wear them all day, every day!',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/converse.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ),
                array(
                    'model' => 'Fischer Chic',
                    'price' => 170,
                    'color' => 'Black',
                    'material' => 'Syntetic',
                    'closure_method' => 'Laces',
                    'description' => 'Fischers wighly ventilated and stylized Chic-models provide style and efficiency for indoor activities. White bottom provides extra cushioning and sharp edges for maximum friction, and all of it in a reasonable price!',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/fischerchic.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ),
                array(
                    'model' => 'Halti Vada Ankle',
                    'price' => 100,
                    'color' => 'Brown',
                    'material' => 'Leather',
                    'closure_method' => 'Laces',
                    'description' => 'Worked with finnish design and care for both men and women, Halti outdoor models are fine tuned for nordic weather. Vada Ankle model sports thinner layer and a sleeker design, forging a shoe more suitable for cities without sacrificing Haltis trademark recourcefulness.',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/halti-vadashoes.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ),
                array(
                    'model' => 'NB Baseball Shoes',
                    'price' => 100,
                    'color' => 'Black',
                    'material' => 'Syntetic',
                    'closure_method' => 'Laces',
                    'description' => 'Traditionally American design NB baseball shoes sport hard pressed metal plating bottoms providing unmatched friction and accuracy on weight control. Essential for any baseball player who takes himself even a little bit seriously. Put me in Coach, I am ready to play!',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/newbalancebaseball.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ),
                array(
                    'model' => 'Steve Madden Bandi-Platform Sandals',
                    'price' => 75,
                    'color' => 'Brown',
                    'material' => 'Syntetic',
                    'closure_method' => 'Straps',
                    'description' => 'Open your summer season with soft and comfy Platform sandals. Providing an extra layer of soft cork on the top and more stretchy soles, these sandals avoid extra friction towards the foot, enabling them for more chafable skin types.',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/maddenbandi.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ),
                array(
                    'model' => 'Nike air-max',
                    'price' => 130,
                    'color' => 'Black',
                    'material' => 'Syntetic',
                    'closure_method' => 'Laces',
                    'description' => 'Classic Nike sportswear now upgraded with hit-nullifying bottom for better balance and weight control. If it is jogging, playing ball or working at the gym, nike is always dependable.',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/nikeairmax.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ),
                array(
                    'model' => 'Nike Flex',
                    'price' => 80,
                    'color' => 'Black',
                    'material' => 'Syntetic',
                    'closure_method' => 'Laces',
                    'description' => 'Light classic Nike running shoes for women specialized in running. Flex model bottom is soft, flat and flexible, which assures superior weight-control on the bottom of the shoe, providing more forward motion on flat surface.',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/nikeflex.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ),
                array(
                    'model' => 'Reino',
                    'price' => 35,
                    'color' => 'Brown',
                    'material' => 'Fabric',
                    'closure_method' => 'Straps',
                    'description' => 'Old finnish classic Reino is an fabric built multi-layer freetime-shoe built to keep your feet warm during chilly wintertime. Reino are crafted with multiple layers of rubber and fabric, witch makes reinos flexible and breathes well. The Reino-team craft their shoes with no excess materials and ecologically, so worry not about the carbon footprint.',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/reino.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ),
                array(
                    'model' => 'Rieker Sandals',
                    'price' => 50,
                    'color' => 'Brown',
                    'material' => 'Leather',
                    'closure_method' => 'Straps',
                    'description' => 'Specialized in light shoes and sandals, Rieker has a far-reaching knowledge on summerwear. These affordable sandals have firm straps that lock your feet firmly on the bottom, but lets your ankle to move freely.',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/riekersandal.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ),
                array(
                    'model' => 'Truant-2',
                    'price' => 150,
                    'color' => 'Brown',
                    'material' => 'Leather',
                    'closure_method' => 'Laces',
                    'description' => 'Truant-2 is a revamped classic truant, which is a combination of american moccasin and hi-top boot. This enables this warm shoe to resist more cold, water and snow. Lacing has also been modified to enable easier handling and more secure grip. Multipurposeful shoe indeed, that sates most of your needs!',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/truant.jpeg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ),
                array(
                    'model' => 'West Code Casual Leather 6066-G',
                    'price' => 250,
                    'color' => 'White',
                    'material' => 'Synthetic',
                    'closure_method' => 'Laces',
                    'description' => 'In the truly high end, West Code 6066-G:s are the best casual shoes on the market. Consisting of thermoplastic rubber, these mens shoes have unrivaled heat resistance and flexibility while feeling light as a feather. Remember the maintenance and these shoes will carry you far and wide.',
                    'imgUrl' => 'https://student.labranet.jamk.fi/~M0394/ttms0500/online-store/images/whitepair.jpg',
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
        Schema::dropIfExists('items');
    }
}
