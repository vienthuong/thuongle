@extends('frontend.master')
@section('main-content')
<div class="chat_window" id="chat_component">
  <div class="top_menu">
    <div class="buttons">
      <div class="button close">
      </div>
      <div class="button minimize">
      </div>
      <div class="button maximize">
      </div>
    </div>
    <div class="title">
      Chat
    </div>
  </div>
    <chat-log :chat_log="chat_log"></chat-log>
  <div class="bottom_wrapper clearfix">
    <div class="message_input_wrapper">
      <input class="message_input" v-model="message_text" placeholder="Type your message here..." />
    </div>
    <div class="send_message">
    <div class="icon">
    </div>
    <a v-on:click="sendMessage">
    <div class="text" style="display: block">
      Send
    </div>
    </a>
  </div>
</div>
</div>
<div class="message_template">
  <li class="message">
    <div class="avatar">

    </div>
    <div class="text_wrapper">
      <div class="text">

      </div>
    </div>
  </li>
</div>
@stop
