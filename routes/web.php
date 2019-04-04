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

// Route::get('/collection', 'ItemsController@collection');
// Route::get('/collection/{item}', 'ItemsController@item');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('send', 'mailController@send');

// Route::view('/{path?}', 'app');
