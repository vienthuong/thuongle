<template>
  <div>
    <div class="chat_window">
      <div class="top_menu">
        <div class="buttons">
          <div class="button close">
          </div>
          <div class="button minimize">
          </div>
          <div class="button maximize">
          </div>
        </div>
        <div class="title">
          Chat
        </div>
      </div>
      <chatlog :chatlog="chatlog" :sender="sender"></chatlog>
      <div class="bottom_wrapper clearfix">
        <div class="message_input_wrapper">
          <input class="message_input" v-model="message_text" v-on:keyup.13="sendMessage" placeholder="Type your message here..." />
        </div>
        <div class="send_message">
          <div class="icon">
          </div>
          <a v-on:click="sendMessage">
            <span class="text" style="display: block">
              Send
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import chatlog from './ChatLog.vue';

  export default {
    data: function(){
      return {
        message_text:'',
        sockets:{
          connect: function(){
            console.log('socket connected')
          },
        },
        sender:localStorage.getItem('username'),
        chatlog : [
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
        ]
      }
    },
    components:{
          chatlog
        },
    methods: {
      sendMessage: function(){
        if(this.message_text==''){
          return false;
        }
        console.log(this.sender);
        var message = {
          message_text: this.message_text,
          sender: this.sender
        }
        this.$socket.emit('emit_method', message);
        message.sender = 'Me';
        this.chatlog.push(message);
        this.message_text = '';
      }
    },
    name:'chatbox',
    created: function () {
      console.log(this.chat_box);
    },
    mounted: function() {
      console.log('Component mounted.')
    }
  }
</script>
