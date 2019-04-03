<?php

namespace App\Http\Controllers;

use App\Orders;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    // GET /api/orders
    public function index(Request $request)
    {
        $user_id = $request->user_id; //Auth::id();
        if (!$user_id) {
            return response()->json('User has to be authenticated');
        }
        $orders = Orders::where('user_id', $user_id)->get();
        return $orders->toJson();
    }

    // POST /api/orders
    public function store(Request $request)
    {
        // $validatedData = $request->validate([
        //   'name' => 'required',
        //   'description' => 'required',
        // ]);

        $user_id = $request->user_id; //Auth::id();
        if (!$user_id) {
            return response()->json('User has to authenticated!');
        }
        $order = Orders::create([
            'user_id' => $user_id,
        ]);
        return response()->json(['message' => 'Order created!', 'order_id' => $order->id]);
    }

    // GET /api/orders/{id}
    public function show(Request $request, $id)
    {
        $user_id = $request->user_id; //Auth::id();
        if (!$user_id) {
            return response()->json('User has to authenticated!');
        }
        // SELECT * FROM orders WHERE user_id=$user_id AND id=$id
        // $order = Orders::where('user_id', $user_id)->find($id);
        $order = Orders::find($id);
        if (!$order) {
            return response()->json('No order with this id!');
        }
        if ($order->user_id != $user_id) {
            return response()->json('Sorry, this is not your order!');
        }
        return $order->toJson();
    }
}
