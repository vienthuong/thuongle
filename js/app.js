
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
import VueSocketio from 'vue-socket.io';

Vue.component('chat-log', require('./components/ChatLog.vue'));
Vue.component('message', require('./components/Message.vue'));
Vue.use(VueSocketio, window.location.hostname + ':3000');

const appChat = new Vue({
    el: '#chat_component',
    data: {
      message_text:'',
      message: 'Hello VUE',
      sockets:{
        connect: function(){
          console.log('socket connected')
        },
      },
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
        },
        {
          message_text : 'Bye Philip!',
          sender : 'You'
        },
        {
          message_text : 'Goodbye!',
          sender : 'Me'
        },
      ],
    },
    methods: {
      sendMessage: function(){
        if(this.message_text==''){
          return false;
        }
        var message = {
          message_text: this.message_text,
          sender: 'You'
        }
          this.chat_log.push(message);
        this.message_text = '';
        this.$socket.emit('emit_method', message);
      }
    }
});
