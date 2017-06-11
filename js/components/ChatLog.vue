<template>
  <div id="wrapper">
  <ul class="messages">
       <message v-for="mes in chat_log" :key="mes.message_text" :mes="mes"></message>
  </ul>
  </div>
</template>
<script>
    import message from './Message.vue'

    export default {
        methods: function(){

        },
        props:['chat_log'],
        name:'chat-log',
        created: function () {
            console.log(this.chat_log);
        },
        mounted: function() {
            console.log('Component mounted.')
        }
    }
</script>
