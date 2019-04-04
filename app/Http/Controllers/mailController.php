<?php

namespace App\Http\Controllers;

use Mail;

class mailController extends Controller
{
    public function send()
    {
        Mail::send(['text' => 'mail'], ['name', 'OnlineStore'], function ($message) {
            $message->to('test.jamk@gmail.com', 'To online store')->subject('Test email');
            $message->from('test.jamk@gmail.com', 'Online store');
        });
    }
}
