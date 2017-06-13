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
          Enter Chat Room
        </div>
      </div>
      <div class="bottom_wrapper clearfix">
        <div class="message_input_wrapper">
          <input class="message_input" v-model="nickName" v-on:keyup.13="setNickname" placeholder="Enter your Nick name here..." />
        </div>
        <div class="send_message">
          <div class="icon">
          </div>
          <a v-on:click="setNickname">
            <span class="text" style="display: block">
              Next
            </span>
          </a>
        </div>
              </div>
    </div>
  </div>
</template>

<script>
    export default {
        data: function(){
            return {
                nickName: '',
            }
        },
        methods:{
            setNickname:function(){
                console.log(this.nickName);
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
    }
    .home .bottom_wrapper{
        position: static;
    }
</style>
