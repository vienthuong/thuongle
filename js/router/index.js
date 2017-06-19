import Vue from 'vue'
import VueRouter from 'vue-router'
import chatbox from '../components/ChatBox.vue';
import Home from '../components/Home.vue';
import Page404 from '../components/404.vue';
import WTFYN from '../components/WTFYN.vue';
import Test from '../components/Test.vue';


import SimpleVueValidation from 'simple-vue-validator';

Vue.use(VueRouter);
Vue.use(SimpleVueValidation);

var nickNameValidator = SimpleVueValidation.Validator.create(
{
  templates: {
    url: 'That doesn\'t look like a valid url.',
    minLength: 'Your name seems too short',
    maxLength: 'Wow this is a loooong ass name',
  }
}
);

const routes = [
  { name:chatbox,path: '/chatbox', component: chatbox,  beforeEnter: (to, from, next) => {
   if(localStorage.getItem('username') === null){
    next('/');
  }else{
    next();
  }
  }},
  { path: '/', component: Home, props:{validator:nickNameValidator} },
  { path: '/ask', component: WTFYN },
  { path: '*', component: Page404 },
  { path: '/test', component: Test },
];


export function createRouter () {
 return new VueRouter({
  routes,
  mode: 'history'
});
}
