
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
import VueRouter from 'vue-router';

// import chatbox from './components/ChatBox.vue';
Vue.component('chatbox', require('./components/ChatBox.vue'));
Vue.component('chatlog', require('./components/ChatLog.vue'));
Vue.component('message', require('./components/Message.vue'));
Vue.use(VueSocketio, window.location.hostname + ':3001');
Vue.use(VueRouter);

const appChat = new Vue({
    el: '#app',
    data: {
      chatlog:[
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
    }
});
