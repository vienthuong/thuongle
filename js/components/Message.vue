
<template>
  <li class="message" v-bind:class="{left:mes.sender=='Me',right:mes.sender!='Me',appeared:is_appeared}" ref="newMes">
    <div v-bind:title="mes.sender" class="avatar">

    </div>
    <div class="text_wrapper">
      <div class="text">
        {{mes.message_text}}
      </div>
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
  .message{
    transition: 0.5s ease-in-out!important;
    animation-name: fadeIn;
    animation-duration:0.5s;
  }
</style>
