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

// Route::get('orders', 'OrdersController@list');
// Route::get('orders/{item}', 'OrdersController@item');
// Route::post('orders', 'OrdersController@newOrder');
