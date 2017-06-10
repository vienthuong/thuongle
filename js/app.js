
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/* Using these kinds of IScroll class for different cases. */

import Vue from 'vue';
Vue.component('chat-log', require('./components/ChatLog.vue'));
Vue.component('message', require('./components/Message.vue'));

const appChat = new Vue({
    el: '#chat_component',
    ready: function(){
      console.log('????');
      var myScroll;
      myScroll = new IScroll('#wrapper',{
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true,
        useTransition:true,
        bounce:true,
        mouseWheelSpeed:10,
        bounceEasing: {
            style: 'cubic-bezier(0,0,1,1)',
            fn: function (k) { return k; }
        }
      });
    },
    data: {
      message_text:'',
      message: 'Hello VUE',
      chat_log:[
        {
          message_text : 'Hello Philip! :)',
          sender : 'You'
        },
        {
          message_text : 'Hi, How are you',
          sender : 'Me'
        },
        {
          message_text : 'Im fine! Have a nice day!',
          sender : 'Me'
        },
        {
          message_text : 'Thank so much Philip!',
          sender : 'You'
        }
      ],
    },
    methods: {
      sendMessage: function(){
        if(this.message_text==''){
          return false;
        }
          this.chat_log.push({
          message_text: this.message_text,
          sender: 'You'
        });
        this.message_text = '';
      }
    }
});
