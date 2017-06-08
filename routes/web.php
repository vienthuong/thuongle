<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('chat', 'Frontend\ChatController@index');

Route::pattern('slug','(.*)');
Route::pattern('slugcat','(.*)');

Route::pattern('provider','(.*)');

Route::pattern('id','([0-9]*)');

Route::get('/', [
	'uses'=>'Frontend\IndexController@index',
	'as' => 'frontend.index.index'
	]);
Route::get('/getMessage', [
	'uses'=>'ChatController@getChatLog',
	'as' => 'public.chat.getchatlog'
	]);
Route::get('/auth/facebook', 'SocialController@redirect');
Route::get('/callback', 'SocialController@callback');
Route::get('/logout', function (){
	if(Auth::user()){
		Auth::logout();
	};
	return redirect()->route('public.index.index');
});


