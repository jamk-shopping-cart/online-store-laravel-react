<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return view('welcome');
});

Route::get('/collection', function () {
    $items = App\Items::all();
    return view('items/collection', compact('items'));
});

Route::get('/collection/{item}', function ($id) {
    $item = App\Items::all();
    return view('items/collection', compact('items'));
});
