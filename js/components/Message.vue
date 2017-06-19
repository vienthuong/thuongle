
<template>
  <li class="message" v-bind:class="{left:mes.sender=='Me',right:mes.sender!='Me',appeared:is_appeared}" ref="newMes">
    <div v-bind:title="mes.sender" class="avatar">

    </div>
    <div class="text_wrapper" v-bind:style="{color:mes.bgColor}">
      <div class="text">
        {{mes.message_text}}
      </div>
      <span class="sender" v-if="mes.sender!='Me'">{{mes.sender}}</span>
    </div>
  </li>
</template>

<script>
    export default {
        name:'message',
        data: function(){
          return{
            newMes:'',
          }
        },
        props: ['mes','is_appeared','sender'],
        created: function(){
        },
        mounted:function() {
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
