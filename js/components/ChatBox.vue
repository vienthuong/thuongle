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
        <div class="pull-right">
          <a v-on:click="showCompact"><span class="bgColor" v-bind:style="{backgroundColor:bgColor.hex}"></span></a>
          <compact-picker v-if="showColorCompact==true" class="compactcolor" v-model="bgColor" />
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
  import { Compact } from 'vue-color'

  const defaultMe = {
    hex:'#ffe6cb',
  };
  const defaultYou = {
    hex:'#c7eafc',
  };
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
      bgColor(){
        this.showCompact();
      }
    },
    data(){
      return {
        showColorCompact:false,
        bgColor: defaultMe,
        myScroll:{},
        message_text:'',
        sender:localStorage.getItem('user').username,
        chatlog : [
        {
          message_text : 'Hello Philip! :)',
          sender : 'You',
        },
        {
          message_text : 'Hi, How are you',
          sender : 'Me',
        },
        {
          message_text : 'Im fine! Have a nice day!',
          sender : 'Me',
        },
        {
          message_text : 'Thank so much Philip!',
          sender : 'You',
        },
        {
          message_text : 'Bye Philip!',
          sender : 'You',
        },
        {
          message_text : 'Goodbye!',
          sender : 'Me',
        },
        ]
      }
    },
    components:{
          'compact-picker': Compact,
      chatlog
    },
    methods: {
      showCompact(){
        this.showColorCompact=!this.showColorCompact;
      },
      sendMessage(){
        if(this.message_text==''){
          return false;
        }
        var message = {
          message_text: this.message_text,
          sender: this.sender,
          bgColor:this.bgColor.hex
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
.chat_window{
  border:1px solid rgba(0,0,0,0.2);
}
.send_message{
  border:1px solid rgba(0,0,0,0.2);
}
.top_menu{
  border-bottom:1px solid rgba(0,0,0,0.2);
}
  .bottom_wrapper{
    border-top:1px solid rgba(0,0,0,0.2);
    z-index: 9999;
  }
  .compactcolor{
    position: absolute;
    z-index: 9999;
    right:0px;
  }
  .vue-color__compact{
    padding-left: 0px!important;
  }
  .bgColor{
    margin-right: 20px;
    display: block;
    height:25px;
    width:25px;
    border:1px solid rgba(0,0,0,0.2);
    border-radius:50%;
  }
</style>
