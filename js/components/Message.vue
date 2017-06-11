
<template>
  <li class="message appeared left">
    <div class="avatar">

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
        props: ['mes'],
        created: function(){
          $('.message').addClass('appeared');
          console.log( $('.message'));
        },
        mounted:function() {
            console.log('Component mounted.')
        }
    }
</script>
