<template>
  <div id="wrapper">
  <ul class="messages">
       <message v-for="mes in chatlog" :key="mes.message_text" :mes="mes" :is_appeared="true"></message>
  </ul>
  </div>
</template>
<script>
    import message from './Message.vue'

    export default {
        methods: function(){

        },
        props:['chatlog'],
        name:'chatlog',
        created: function () {
            console.log(this.chatlog);
        },
        mounted: function() {
            $('.message').addClass('appeared');
            console.log('Component mounted.')
        }
    }
</script>
