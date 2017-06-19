
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
 import { createRouter } from './router';

 Vue.use(VueSocketio, window.location.hostname + ':3001' );



const router = createRouter();

const appChat = new Vue({
  el: '#app',
  router,
  data: {

  },
  methods: {
  }
}).$mount('#app');
