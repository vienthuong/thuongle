
<template>
  <li v-if="mes.user.username!='Bot'" class="message" v-bind:class="{left:mes.user.username==me,right:mes.user.username!=me,appeared:is_appeared}" ref="newMes">
    <div v-bind:title="mes.user.username" class="avatar" v-bind:style="{backgroundColor:mes.user.avatarBg}">

    </div>
    <div class="text_wrapper" v-bind:style="{color:mes.user.bgColor.hex}">
      <div class="text" v-bind:style="{color:mes.user.txtColor.hex}">
        {{mes.message_text}}
      </div>
      <span class="sender" v-if="mes.user.username!=me" v-bind:style="{color:mes.user.txtColor.hex}">{{mes.user.username}}</span>
    </div>
  </li>
  <li v-else class="message bot appeared">
   <div class="text_wrapper" v-bind:class="{imgWrapper:mes.type=='askImg'}" v-bind:style="{color:mes.user.bgColor.hex}">
    <div v-if="mes.type!='askImg'" class="text" v-bind:style="{color:mes.user.txtColor.hex}" v-html="mes.message_text">
      </div>
      <div v-else class="text imgMeme" v-bind:style="{color:mes.user.txtColor.hex}" style="height:200px" v-html="mes.message_text">
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
          });
          // setTimeout(()=>{
          //             $('.bot').fadeOut('slow');
          // },5000);
        }
    }
</script>
<style scoped>
  @keyframes fadeIn{
    from{opacity: 0}
    to{opacity: 1}
  }
  .bot .text_wrapper{
    width:100%;
  }
  .text_wrapper{
    background-color: currentColor;
  }
  .message,.bot{
    transition: 0.5s ease-in-out!important;
    animation-name: fadeIn;
    animation-duration:0.5s;
  }
  .bot{
    opacity: 1!important;
    animation-name: fadeOut;
    animation-duration:5s;
  }
  @keyframes fadeOut{
    from{display: block}
    to{display: none}
  }
  .sender{
    position: absolute;
    bottom:3px;
    right:10px;
    opacity: 0.7;
    font-size:13px;
  }
  .text{
    font-family:arial,sans-serif;
  }
   .imgWrapper{
    text-align: center;
    /*min-height: 200px;*/
  }
  .imgWrapper:before {
    content: ' ';
    display: inline-block;
    vertical-align: middle;
    min-height: 200px;
  }
  .imgMeme{
    display: inline-block;
    vertical-align: middle;
  }
 
</style>
