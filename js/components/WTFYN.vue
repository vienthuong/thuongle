<template>
  <div>
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
        <div class="title">
          {{ response_text }}
        </div>
      </div>
      <img v-bind:src="imageLink" alt="">
      <div class="bottom_wrapper clearfix">
        <div class="message_input_wrapper">
          <input class="message_input" v-model="question" v-on:keyup.13="sendQuestion" placeholder="Ask anything" />
        </div>
        <div class="send_message">
          <div class="icon">
          </div>
          <a v-on:click="sendQuestion">
            <span class="text" style="display: block">
              Let's see
            </span>
          </a>
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
    data: function(){
      return {
        imageLink: 'https://cdn.meme.am/cache/instances/folder979/500x/63443979/ron-burgundy-go-ahead-ask-me-anything.jpg',
        question: '',
        response_text: 'Ask me now',
      }
    },
    methods:{
      sendQuestion:function(){
        console.log(this.nickName);
      },
      getAnswer: _.debounce(
        function () {
          if (this.question.indexOf('?') === -1) {
            this.response_text = 'Questions usually contain a question mark. ;-)'
            return
          }
          this.response_text = 'Thinking...'
          var vm = this
          axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.response_text = _.capitalize(response.data.answer);
            vm.imageLink = response.data.image;
          })
          .catch(function (error) {
            vm.response_text = 'Error! Could not reach the API. ' + error
          })
        },
      // This is the number of milliseconds we wait for the
      // user to stop typing.
      500
      )
    },
    watch: {
          // whenever question changes, this function will run
          question: function (newQuestion) {
            this.response_text = 'Waiting for you to stop typing...';
            this.getAnswer();
          }
        },
        mounted() {
          console.log('Component mounted.')
        }
      }
    </script>
    <style scoped>
      .home{
        height:auto;
        width:auto;
      }
      .home .bottom_wrapper{
        position: static;
      }
      .bottom_wrapper .send_message{

      }
    </style>
