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

// all orders
Route::get('orders', 'OrdersController@index');
Route::post('orders', 'OrdersController@store');
Route::get('orders/{id}', 'OrdersController@show');

// items of a certain order
Route::get('orders/{order_id}/items', 'OrderItemsController@index');
Route::post('orders/{order_id}/items', 'OrderItemsController@store');
Route::get('orders/{order_id}/items/{id}', 'OrderItemsController@show');

// Route::get('orders', 'OrdersController@index');
// Route::post('orders', 'OrdersController@store');
// Route::get('orders/{id}', 'ProjectController@show');
