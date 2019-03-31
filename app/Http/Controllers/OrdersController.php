<?php

namespace App\Http\Controllers;

use App\Orders;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    public function index()
    {
        $orders = Orders::all();
        return $orders->toJson();
    }

    public function store(Request $request)
    {
        // $validatedData = $request->validate([
        //   'name' => 'required',
        //   'description' => 'required',
        // ]);

        // TODO: use session to get user id.
        $order = Orders::create([
            'user_id' => '1',
        ]);
        return response()->json(['message' => 'Order created!', 'order_id' => $order->id]);
    }

    public function show($id)
    {
        $order = Orders::find($id);
        return $order->toJson();
    }
}
