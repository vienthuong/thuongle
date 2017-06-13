
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
import chatbox from './components/ChatBox.vue';
import chatlog from './components/ChatLog.vue';
import Home from './components/Home.vue';
import Page404 from './components/404.vue';
import WTFYN from './components/WTFYN.vue';

Vue.use(VueSocketio, window.location.hostname + ':3001');
Vue.use(VueRouter);
Vue.component('chatlog',require('./components/ChatLog.vue'));
Vue.component('message',require('./components/Message.vue'));

const routes = [
  { path: '/chatbox', component: chatbox},
  { path: '/', component: Home },
  { path: '/ask', component: WTFYN },
  { path: '*', component: Page404 },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

const appChat = new Vue({
    el: '#app',
    router,
    data: {
    },
    methods: {
    }
}).$mount('#app');
