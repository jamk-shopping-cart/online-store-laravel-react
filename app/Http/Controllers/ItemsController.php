<?php

namespace App\Http\Controllers;

use App\Items;

class ItemsController extends Controller
{
    public function collection()
    {
        $items = Items::paginate(5);
        // $items = Items::all();
        // return view('items/collection', compact('items'));
        return $items->toJson();
    }
    public function item($id)
    {
        $item = Items::find($id);
        // return view('items/item', compact('item'));
        return $item->toJson();
    }
}
