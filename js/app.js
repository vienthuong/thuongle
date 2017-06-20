
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
 import { createRouter } from './router';
  import VueProgressBar from 'vue-progressbar'


const options = {
  color: 'deepskyblue',
  failedColor: '#874b4b',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)


const router = createRouter();

const appChat = new Vue({
  el: '#app',
  router,
  data: {

  },
  methods: {
  },
  created(){
    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start()
      next()
    });
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  },
  mounted(){
    this.$Progress.finish();
  }
}).$mount('#app');
