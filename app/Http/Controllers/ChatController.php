<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ChatMessages;
use App\User;

class ChatController extends Controller
{
	public function __construct(){
        $this->middleware('auth');
    }

    public function getChatLog(){
    	$messages = ChatMessages::with('user')->get();
    	return $messages;
    }
}
