<?php

namespace App\Http\Controllers;

use App;

class ItemsController extends Controller
{
    public function collection()
    {
        $items = App\Items::all();
        // return view('items/collection', compact('items'));
        return $items->toJson();
    }
    public function item($id)
    {
        $item = App\Items::find($id);
        // return view('items/item', compact('item'));
        return $item->toJson();
    }
}
