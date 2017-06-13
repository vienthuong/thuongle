<template>
  <div>
    <div id="fb-root"></div>
    <div class="chat_window home">
      <div class="top_menu">
        <div class="buttons">
          <div class="button close">
          </div>
          <div class="button minimize">
          </div>
          <div class="button maximize">
          </div>
        </div>
        <div class="pull-right" style="margin-right:20px">
          <div class="fb-share-button" v-bind:data-href="sharePage" data-layout="button_count" data-size="small" data-mobile-iframe="true">
            <a class="fb-xfbml-parse-ignore" target="_blank" v-bind:href="sharePage">Share</a>
          </div>
        </div>
        <div v-html="response_text" class="title">
        </div>
      </div>
      <div class="img-wrapper">
        <div class="imgMeme" v-html="response_img">
        </div>
        <!-- <img class="meme-img img-responsive" src="/img/default.jpg" alt=""> -->
      </div>
      <div class="bottom_wrapper clearfix">
        <div class="message_input_wrapper">
          <input class="message_input" v-model="question" v-on:keyup.13="getAnswer" placeholder="Hỏi gì hỏi lẹ..." />
        </div>
        <div class="send_message" style="display:none">
          <div class="icon">
            <span class="text">Share</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import lodash from 'lodash';
  export default {
    name:'WTFYN',
    created:function(){            
      if(this.$route.query.q!=null){
        this.question = this.$route.query.q;
        this.force = this.$route.query.a;
        this.getAnswer();
      };
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=1886558448255498";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    },
    data: function(){
      return {
        force: false,
        sharePage: 'http://' + window.location.hostname + this.$route.fullPath,
        response_img: '<img class="meme-img img-responsive" src="/img/default.jpg" alt="">',
        question: '',
        response_text: 'Hỏi gì đi?',
      }
    },
    methods:{
      getAnswer: _.debounce(  
        function () {
          if (this.question.indexOf('?') === -1) {
            this.response_text = 'Hỏi thì thêm chấm hỏi ?'
            return
          }
          this.response_text = 'Đễ nghĩ đã...'
          var vm = this
          var force = vm.force;
          axios.get('https://yesno.wtf/api?force=' + force)
          .then(function (response) {
            vm.response_text = '<span style="font-weight:bold;color:blue">' + _.capitalize(response.data.answer) + '</span>';
            vm.response_img = '<img class="meme-img img-responsive" src="' + response.data.image + '" alt="">';
            if(force != false){ vm.force = false};
            vm.sharePage = 'http://' + window.location.hostname + '/?q=' + vm.question + '&a=' + response.data.answer; 
            console.log(vm.sharePage);
          })
          .catch(function (error) {
            vm.response_text = 'Server tạch rồi các bạn eii ' + error
          })
        },
        500
        )
    },
    watch: {
      question: function () {
        this.response_text = '...';
        this.getAnswer();
      }
    },
    mounted() {
    }
  }
</script>
<style scoped>
  .home{
    height:auto;
  }
  .home .bottom_wrapper{
    position: static;
  }
  .bottom_wrapper .send_message{
    background: #48629C;
    border-color:#3E5384;
  }
  .home .message_input_wrapper{
    width:100%;
  }
  .img-wrapper{
    min-height: 300px;
    text-align: center;
  }
  .img-wrapper:before {
    content: ' ';
    display: inline-block;
    vertical-align: middle;
    min-height: 300px;
  }
  .imgMeme{
    display: inline-block;
    vertical-align: middle;
  }
</style>
