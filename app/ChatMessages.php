<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChatMessages extends Model
{
    public $timestamps = true;
    protected $fillable = [
    	'message','user_id'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
