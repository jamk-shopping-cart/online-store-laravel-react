<?php

namespace App\Http\Controllers;

use App\OrderItems;
use App\Orders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

function isMyOrder($request, $order_id)
{
    // orderItem <-->order<-->user
    // $user_id = $request->user_id; //Auth::id();
    $user = Auth::guard('api')->user();
    if (!$user) {
        return ['isError' => true, 'message' => 'User has to be authenticated'];
    }
    $order = Orders::find($order_id);
    if ($order->user_id != $user->id) {
        return ['isError' => true, 'message' => 'Sorry, this is not your order'];
    }
    return 'OK';
}

class OrderItemsController extends Controller
{
    // GET /api/orders/{order_id}/items
    public function index(Request $request, $order_id)
    {
        $isError = isMyOrder($request, $order_id);
        if ($isError != 'OK') {
            return response()->json($isError);
        }
        // SELECT * FROM order_items WHERE order_id=1 AND user_id=5
        $orderItems = OrderItems::where('order_id', $order_id)->get();
        return $orderItems->toJson();
    }

    // POST /api/orders/{order_id}/items/
    public function store(Request $request, $order_id)
    {
        $isError = isMyOrder($request, $order_id);
        if ($isError != 'OK') {
            return response()->json($isError);
        }
        if ($request->input('id')) {
            $id = $request->input('id');
            $orderItem = OrderItems::whereId($id)->update([
                // 'order_id' => $order_id,
                // 'item_id' => $request->input('item_id'),
                'quantity' => $request->input('quantity'),
                'size' => $request->input('size'),
            ]);
        } else {
            $orderItem = OrderItems::create([
                'order_id' => $order_id,
                'item_id' => $request->input('item_id'),
                'quantity' => $request->input('quantity'),
                'size' => $request->input('size'),
            ]);
        }
        return response()->json(['message' => 'Order item created!', 'orderItem' => $orderItem]);
    }

    // GET /api/orders/{order_id}/items/{id}
    public function show(Request $request, $order_id, $id)
    {
        // Check authorization:
        $isError = isMyOrder($request, $order_id);
        if ($isError != 'OK') {
            return response()->json($isError);
        }
        // Main query:
        $orderItem = OrderItems::find($id);
        return $orderItem->toJson();
    }
}
