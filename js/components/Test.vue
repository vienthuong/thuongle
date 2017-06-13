<template>
	
<div>
	<h1>{{ answer }}</h1>
	<img v-bind:src="imageLink2" alt="">
</div>
</template>
<script>
  import axios from 'axios';

	export default {
    name:'Test',
    data:function(){
    	return {
    		imageLink2:'/img/default.jpg',
    		answer:'???'
    	}
    },
    created: function(){
    	var vm = this
    	axios.get('https://yesno.wtf/api')
          .then(function (response) {
          	console.log(response.data.image);
          	vm.answer = response.data.answer;
            vm.imageLink2 = response.data.image;
          })
    },
	}
</script>