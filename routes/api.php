<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('collection', 'ItemsController@collection'); // GET /api/collection
Route::get('collection/{item}', 'ItemsController@item'); // GET /api/collection/1

Route::get('orders', 'OrdersController@index');
Route::post('orders', 'OrdersController@store');
Route::get('orders/{id}', 'OrdersController@show');

// Route::get('orders', 'OrdersController@index');
// Route::post('orders', 'OrdersController@store');
// Route::get('orders/{id}', 'ProjectController@show');
