<template>
  <div id="wrapper">
  <ul class="messages">
       <message v-for="mes in chat_log" :mes="mes"></message>
  </ul>
  </div>
</template>
<script>
    import message from './Message.vue'

    export default {
        methods:{

        },
        props:['chat_log'],
        name:'chat-log',
        created: function () {
            console.log(this.chat_log);
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
