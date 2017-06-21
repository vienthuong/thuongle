<template>
  <div>
    <cmenu :online_users="countUsers"></cmenu>
    <div class="chat_window">
      <div class="top_menu">
        <div class="buttons">
          <div class="button close" v-bind:title="countUsers + ' Online User(s)'">
          </div>
          <div class="button minimize" title="Chatbox Help" v-on:click="botReply(helpMes,'helpMenu')">
          </div>
          <div class="button maximize" title="Clear Chatbox" v-on:click="clearChatBox">
          </div>
        </div>
        <div class="pull-right">
          <a href="/ask" target="_noblank" title="Ask Page"><span class="bgColor helper"><i class="fa fa-font"></i></span></a>
          <a v-on:click="botReply(helpMes,'helpMenu')" title="Chatbox Help"><span class="bgColor helper"><i class="fa fa-book"></i></span></a>
          <a v-on:click="clearChatBox" title="Clear Chatbox"><span class="bgColor helper"><i class="fa fa-refresh fa-spin fa-3x fa-fw"></i></span></a>

          <a v-on:click="showCompact('background')" title="Background Message Color"><span class="bgColor" v-bind:style="{backgroundColor:user.bgColor.hex}">B</span></a>
          <compact-picker v-if="showBColorCompact==true" class="compactcolor" v-model="user.bgColor" />
          <a v-on:click="showCompact('text')" title="Text Message Color"><span class="bgColor txtColor" v-bind:style="{backgroundColor:user.txtColor.hex}">T</span></a>
          <compact-picker v-if="showTColorCompact==true" class="compactcolor" v-model="user.txtColor" />
        </div>
        <div class="title">
          Chat
        </div>
      </div>
      <chatlog :chatlog="chatlog" :myScroll="myScroll"></chatlog>
      <div class="bottom_wrapper clearfix">
        <div class="message_input_wrapper">
          <input class="message_input" v-model="message_text" v-on:keyup.13="sendMessage" placeholder="Type your message here..." autofocus="true"  maxlength="80"/>
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
  import cmenu from './ChatboxMenu.vue';
  import { Compact } from 'vue-color';
  import {getAnswer} from '../services/getanswer.js';
  import {defaultBotUser,welcomeMes,helpMes,helpKeywords} from '../services/botDefault.js';
  import {createIscroll} from '../services/iScroll.js';

export default {
  sockets:{
    connect(){
      console.log('connected');
      this.$socket.emit('joinRoom', 'a client has joined chat room');
    },
    message_received(message){
      this.chatlog.push(message);
      this.updateScroll();
    },
    usersInRoom(count){
      this.countUsers = count;
    },
    disconnect(){
      this.$socket.emit('leaveRoom', 'a client has left chat room');
    },
  },
  watch: {
    'user.bgColor'(){
      this.showCompact('background');
      localStorage.setItem('user',JSON.stringify(this.user));
    },
    'user.txtColor'(){
      this.showCompact('text');
      localStorage.setItem('user',JSON.stringify(this.user));
    },
  },
  computed:{
    submitted_text(){
      return this.checkInput(this.message_text);
    }
  },
  data(){
    return {
      helpMes:helpMes,
      showBColorCompact:false,
      showTColorCompact:false,
      countUsers:0,
      myScroll:{},
      message_text:'',
      user: JSON.parse(localStorage.getItem('user')),
      chatlog : [
      welcomeMes,
      ]
    }
  },
  components:{
    'compact-picker': Compact,
    chatlog,
    cmenu
  },
  methods: {
    showCompact(compact){
      if(compact=='background'){
        this.showBColorCompact=!this.showBColorCompact;
      }
      else{
        this.showTColorCompact =!this.showTColorCompact;
      }
    },
    sendMessage(){
      if(this.message_text=='' || !this.submitted_text){
        this.message_text='';
        return false;
      }
      var message = {
        message_text: this.submitted_text,
        user: this.user,
      }
      this.$socket.emit('message_sent', message);
      this.chatlog.push(message);
      this.updateScroll();
      this.message_text = '';
    },
    checkInput(input){
      if(input=='/help'){
        this.botReply(helpMes,'helpMenu');
        return false;
      }
      if(_.startsWith(input, '/ask')){
        this.askWTF(input);
        return false;
      };
      if(_.startsWith(input, '/clear')){
        this.clearChatBox();
        return false;
      };
      return input;
    },
    botReply(msg,type){
      if(type=='helpMenu'){
        if(this.chatlog[this.chatlog.length-1].type == 'helpMenu'){
          return false;
        }
      };
      var message = {
        message_text: msg,
        user: defaultBotUser,
        type:type
      }
      this.chatlog.push(message);
      this.$socket.emit('message_sent', message);
      this.updateScroll();
    },
    askWTF(input){
      var vm = this;
      var question = _.split(input, '/ask ', 2)[1];
      if (question.indexOf('?') === -1 || question.length<=4) {
        vm.botReply('Sai cú pháp hoặc quá ngắn','ask');
        return false;
      }else{
       vm.message_text = question;
       vm.sendMessage();
       var promise = getAnswer();
       promise.then(function(data){
          vm.botReply('@' + vm.user.username + ': ' + data.answer,'ask');
          vm.botReply(data.img,'askImg');
      });
      return false;
     }
   },
   clearChatBox(){
    this.chatlog = [welcomeMes];
    this.updateScroll();
  },
  updateScroll(){
    setTimeout(()=>{
     this.myScroll.refresh();
     this.myScroll.scrollTo(0, this.myScroll.maxScrollY, 0);
   }, 0);
  }
},
updated(){
    },
    name:'chatbox',
    created() {
    },
    mounted() {
     this.myScroll = createIscroll();
     this.myScroll.scrollTo(0, this.myScroll.maxScrollY, 0);
   }
 }
</script>
<style scoped>
  .title{
    padding-left: 200px;
  }
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
    padding-left: 8px!important;
    width:248px;
  }
  .bgColor{
    margin-right: 10px;
    display: inline-block;
    height:25px;
    width:25px;
    border:1px solid rgba(0,0,0,0.2);
    border-radius:50%;
    color: #fff;
    text-align: center;
    font-weight: bold;
    padding-top: 1px;
  }
  .helper{
    border:1px solid rgba(0,0,0,0.5);
    background-color: #fff;
        padding: 0px!important;

  }
  .helper i{
    font-weight: normal;
    font-size:13px;
    color: #000;
  }
  .bgColor:hover{
    cursor: pointer;
  }
  .txtColor{
    margin-right: 20px!important;
  }
  .minimize,.maximize{
    cursor: pointer;
  }
</style>
