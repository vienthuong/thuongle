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
          <input class="message_input" name="username" v-model.trim="nickName" v-on:keyup.13="setGuest" placeholder="Enter your Nick name here..." />
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
        bgColors:[
        '#FFF5EE','#ffe6cb','#FAEBD7','#00FFFF','#000000','#A52A2A','#8A2BE2','#DC143C','#FF1493','#ADFF2F','#B22222','#8B0000','#9932CC','#7CFC00','#FF0000','#008080','#9ACD32','#FFFF00','#FF6347','#87CEEB','#FA8072','#D87093','#FFC0CB','#000080','#F0E68C','#FFB6C1','#20B2AA','#808080','#FF8C00',
        '#FF00FF','#4B0082','#DAA520','#FF00FF','#FFD700','#008000','#2F4F4F','#DC143C','#6495ED','#FF7F50','#D2691E','#00FFFF','#0000FF','#B8860B','#008B8B','#00008B','#00FFFF','#00FF00','#DDA0DD','#708090','#40E0D0','#9ACD32','#D2B48C','#BC8F8F'
        ],
        avatarBgColors:[
          'rgb(122, 158, 159)','rgb(104, 179, 200)','rgb(65, 184, 131)','rgb(243, 187, 69)','rgb(235, 94, 40)'
        ],
      }
    },
    props:['validator'],
    validators: {
      nickName(value) {
        return this.validator.value(value).required('Your nickname please!').minLength(4).maxLength(10);
      }
    },
    methods:{
      setGuest(){
        var vm = this;
        vm.$validate()
        .then(function (success) {
          if(success){
          localStorage.setItem('authenticase',false);
          var user = {
            username:vm.nickName,
            bgColor: {hex:vm.randomColor(vm.bgColors)},
            txtColor: {hex:vm.randomColor(vm.bgColors)},
            avatar_url:'',
            avatarBg:vm.randomColor(vm.avatarBgColors)
          };
          localStorage.setItem('user',JSON.stringify(user));
          vm.$router.push('/chatbox');
          }
        });
      },
      randomColor(arr = []){
        return arr[Math.floor(Math.random() * arr.length)];
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
