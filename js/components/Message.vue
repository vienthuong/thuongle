
<template>
  <li class="message" v-bind:class="{left:mes.user.username==me,right:mes.user.username!=me,appeared:is_appeared}" ref="newMes">
    <div v-bind:title="mes.user.username" class="avatar" v-bind:style="{backgroundColor:mes.user.avatarBg}">

    </div>
    <div class="text_wrapper" v-bind:style="{color:mes.user.bgColor.hex}">
      <div class="text" v-bind:style="{color:mes.user.txtColor.hex}">
        {{mes.message_text}}
      </div>
      <span class="sender" v-if="mes.user.username!=me" v-bind:style="{color:mes.user.txtColor.hex}">{{mes.user.username}}</span>
    </div>
  </li>
</template>

<script>
    export default {
        name:'message',
        data: function(){
          return{
            newMes:'',
            me:JSON.parse(localStorage.getItem('user')).username
          }
        },
        props: ['mes','is_appeared'],
        created: function(){
        },
        mounted:function() {
          this.$on('avatarBgChanged',function(color){
            console.log(color);
          })
        }
    }
</script>
<style scoped>
  @keyframes fadeIn{
    from{opacity: 0}
    to{opacity: 1}
  }
  .text_wrapper{
    background-color: currentColor;
  }
  .message{
    transition: 0.5s ease-in-out!important;
    animation-name: fadeIn;
    animation-duration:0.5s;
  }
  .sender{
    position: absolute;
    bottom:3px;
    right:10px;
    opacity: 0.7;
    font-size:13px;
  }
</style>
