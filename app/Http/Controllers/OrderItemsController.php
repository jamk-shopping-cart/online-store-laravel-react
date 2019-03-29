<?php

namespace App\Http\Controllers;

use App\OrderItems;
use Illuminate\Http\Request;

class OrderItemsController extends Controller
{
    public function index($order_id)
    {
        // $projects = Project::where('is_completed', false)
        //     ->orderBy('created_at', 'desc')
        //     ->withCount(['tasks' => function ($query) {
        //         $query->where('is_completed', false);
        //     }])
        // ->get();

        // SELECT * FROM order_items WHERE order_id=1
        $orderItems = OrderItems::where('order_id', $order_id)->get();
        return $orderItems->toJson();
    }

    public function store($order_id, Request $request)
    {
        // $validatedData = $request->validate([
        //     'item_id' => 'required',
        //     'quantity' => 'required',
        //     'size' => 'required',
        // ]);
        // return response()->json('here! order_id=' . $order_id . ', item_id=' . $request->input('item_id') . ', validated=' . $validatedData['item_id']);

        // $table->unsignedInteger('order_id');
        // $table->unsignedInteger('item_id');
        // $table->integer('quantity');
        // $table->integer('size');

        //$request->input('name');
        $orderItem = OrderItems::create([
            'order_id' => $order_id,
            'item_id' => $request->input('item_id'),
            'quantity' => $request->input('quantity'),
            'size' => $request->input('size'),
        ]);
        return response()->json(['message' => 'Order item created!', 'orderItem' => $orderItem->toJson()]);
    }

    public function show($id)
    {
        $orderItem = OrderItems::find($id);
        return $orderItem->toJson();
    }
}
