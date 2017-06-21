<template>
  <div>
  <cmenu :online_users="countUsers"></cmenu>
  <div class="chat_window">
    <div class="top_menu">
      <div class="buttons">
        <div class="button close" v-bind:title="countUsers">
        </div>
        <div class="button minimize">
        </div>
        <div class="button maximize">
        </div>
      </div>
      <div class="pull-right">
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
        <input class="message_input" v-model="message_text" v-on:keyup.13="sendMessage" placeholder="Type your message here..." autofocus="true" />
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
  import axios from 'axios';

  const defaultBotUser = {
           username:'Bot',
          txtColor:{hex:'#fff'},
          bgColor:{hex:'#7B64FF'},
          type:''
        };
  const helpKeywords = [
    '/help','/ask','/me'
  ];
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
        showBColorCompact:false,
        showTColorCompact:false,
        countUsers:0,
        myScroll:{},
        message_text:'',
        user: JSON.parse(localStorage.getItem('user')),
        chatlog : [
          {
            message_text: "Chào mừng các bạn đến với Color Chatbox<br>Nhập /help để xem hướng dẫn",
            user:defaultBotUser
          }
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
          if(this.chatlog[this.chatlog.length-1].user.type == 'helpMenu'){
            return false
          }
          this.botReply('Các chức năng của Chatbox:<br><ul>'+
            '<li><strong>/help</strong>: Xem bảng trợ giúp</li>'
            +'<li><strong>/ask [câu hỏi]</strong>: Hỏi đáp yes/no</li>'
            +'</ul>','helpMenu');
          return false;
        }
        if(_.startsWith(input, '/ask')){
          var question = _.split(input, '/ask ', 2)[1];
           if (question.indexOf('?') === -1 || question.length<=4) {
            this.botReply('Sai cú pháp hoặc quá ngắn','ask');
            return false;
          }else{
             this.message_text = question;
             this.sendMessage();
             var result = this.getAnswer();
             console.log(result.answer);
             // setTimeout(()=>{console.log(result.answer)},5000);
            this.botReply(result.answer,'ask');
            this.botReply(result.img,'ask');
             return false;
          }
          console.log(question);
        }
        return input;
      },
      getAnswer(){
        var result = {
          answer:'',
          img:''
        };
        new Promise((resolve, reject)=>{
        axios.get('https://yesno.wtf/api')
          .then((response) =>{
            result.answer = '<span style="font-weight:bold;color:blue">' + _.capitalize(response.data.answer) + '</span>';
            result.img = '<img class="meme-img img-responsive" src="' + response.data.image + '" alt="">';
            resolve(result);
          })
          .catch((error) => {
            result.answer = 'Server tạch' + error;
            reject(error);
          });
        });
          return result;
      },
      botReply(msg,type){
        var message = {
          message_text: msg,
          user: defaultBotUser,
        }
        message.user.type = type;
        this.chatlog.push(message);
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
  .bgColor:hover{
    cursor: pointer;
  }
  .txtColor{
    margin-right: 20px!important;
  }

</style>
