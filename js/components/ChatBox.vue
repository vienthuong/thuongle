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
      <chatlog :chatlog="chatlog" :sender="sender" :myScroll="myScroll"></chatlog>
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
    sockets:{
      connect(){
        this.$socket.emit('joinRoom', 'a client has joined chat room');
      },
      message_received(message){
        this.chatlog.push(message);
        this.updateScroll();
      },
      disconnect(){
        this.$socket.emit('leaveRoom', 'a client has left chat room');
      },
    },
        watch: {
      //     chatlog() {
      //     console.log(this.chatlog.length);
      //     this.myScroll.refresh();
      //     this.myScroll.scrollTo(0, this.myScroll.maxScrollY, 0);
      // }
    },
    data(){
      return {
        myScroll:{},
        message_text:'',
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
      sendMessage(){
        if(this.message_text==''){
          return false;
        }
        var message = {
          message_text: this.message_text,
          sender: this.sender
        }
        this.$socket.emit('message_sent', message);
        message.sender = 'Me';
        this.chatlog.push(message);
        this.updateScroll();
        this.message_text = '';
      },
      updateScroll(){
        setTimeout(()=>{ 
         this.myScroll.refresh();
         this.myScroll.scrollTo(0, this.myScroll.maxScrollY, 0);
       }, 0);
      }
    },
    updated(){
      // console.log('123213');
    },
    name:'chatbox',
    created() {

    },
    mounted() {
     this.myScroll = new IScroll('#wrapper',{
      scrollbars: true,
      mouseWheel: true,
      interactiveScrollbars: true,
      shrinkScrollbars: 'scale',
      fadeScrollbars: true,
      useTransition:true,
      bounce:true,
      mouseWheelSpeed:10,
      bounceEasing: {
        style: 'cubic-bezier(0,0,1,1)',
        fn: function (k) { return k; }
      }
    });
     this.myScroll.scrollTo(0, this.myScroll.maxScrollY, 0);
   }
 }
</script>
<style scoped>
  .bottom_wrapper{
    z-index: 9999;
  }
</style>
