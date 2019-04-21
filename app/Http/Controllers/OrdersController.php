<?php

namespace App\Http\Controllers;

use App\Orders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Mail;

class OrdersController extends Controller
{
    // GET /api/orders
    public function index(Request $request)
    {
        // $user_id = $request->user_id;
        // $user_id = Auth::id();
        $user = Auth::guard('api')->user();
        if (!$user) {
            return response()->json(['isError' => true, 'message' => 'User has to be authenticated']);
        }
        $orders = Orders::where('user_id', $user->id)->get();
        return $orders->toJson();
    }

    // POST /api/orders
    // Creates a new order OR updates an existing order (with payment information).
    // If request has orderId and payment info then update existing order and complete it.
    public function store(Request $request)
    {
        $user = Auth::guard('api')->user();
        if (!$user) {
            return response()->json(['isError' => true, 'message' => 'User has to be authenticated']);
        }
        if ($request->input('id')) {
            $id = $request->input('id');
            if (!$request->input('name') || !$request->input('address')) {
                return response()->json(['isError' => true, 'message' => 'Name or address is not defined']);
            }
            Orders::whereId($id)->update([
                'name' => $request->input('name'),
                'address' => $request->input('address'),
                'is_completed' => 1,
            ]);
            Mail::send(['text' => 'mail'], ['name', 'OnlineStore'], function ($message) {
                $message->to('test.jamk@gmail.com', 'To online store')->subject('Test email');
                $message->from('test.jamk@gmail.com', 'Online store');
            });
            return response()->json(['message' => 'Order updated!', 'order_id' => $id]);
        } else {
            $order = Orders::create([
                'user_id' => $user->id,
            ]);
            return response()->json(['message' => 'Order created!', 'order_id' => $order->id]);
        }
    }

    // GET /api/orders/{id}
    public function show(Request $request, $id)
    {
        // $user_id = $request->user_id;
        // $user_id = Auth::id();
        $user = Auth::guard('api')->user();
        if (!$user) {
            return response()->json(['isError' => true, 'message' => 'User has to be authenticated']);
        }
        // SELECT * FROM orders WHERE user_id=$user_id AND id=$id
        // $order = Orders::where('user_id', $user_id)->find($id);
        $order = Orders::find($id);
        if (!$order) {
            return response()->json('No order with this id!');
        }
        if ($order->user_id != $user->id) {
            return response()->json('Sorry, this is not your order!');
        }
        return $order->toJson();
    }
}
