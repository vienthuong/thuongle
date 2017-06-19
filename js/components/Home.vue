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
        <div class="message_input_wrapper" :class="{error: validation.hasError('nickName')}">
          <input class="message_input" name="username" v-model="nickName" v-on:keyup.13="setGuest" placeholder="Enter your Nick name here..." />
          <div class="message">{{ validation.firstError('nickName') }}</div>
        </div>
        <div class="send_message">
          <div class="icon">
          </div>
          <a v-on:click="setGuest">
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
    props:['validator'],
    validators: {
      nickName(value) {
        return this.validator.value(value).required('Your nickname please!').minLength(4).maxLength(10);
      }
    },
    methods:{
      setGuest:function(){
        var vm = this;
        vm.$validate()
        .then(function (success) {
          if(success){
          localStorage.setItem('authenticase',false);
          var user = {
            username:vm.nickName,
            bgColor:'#ffe6cb'
          }
          localStorage.setItem('user',user);
          vm.$router.push('/chatbox');
          }
        });
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
  .bottom_wrapper .message_input_wrapper{
    transition: 0.3s ease-in-out;
    position: relative;
    height:51px;
  }
  .bottom_wrapper .message_input_wrapper .message{
    position: absolute;
    top:-30px;
    color:red;
  }
  .bottom_wrapper .message_input_wrapper.error{
    border-color:red!important;
  }
</style>
