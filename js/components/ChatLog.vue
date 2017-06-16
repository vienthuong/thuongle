<template>
  <div id="wrapper">
  <ul class="messages">
       <message v-for="mes in chatlog" :key="mes.message_text" :mes="mes" :is_appeared="true" :sender="sender"></message>
  </ul>
  </div>
</template>
<script>
    import message from './Message.vue'

    export default {
        methods: function(){

        },
        components:{
          message
        },
        props:['chatlog','sender'],
        name:'chatlog',
        created: function () {
            // console.log(this.chatlog);
        },
        mounted: function() {
            $('.message').addClass('appeared');
        }
    }
</script>
