<template>
	<div class="screen">
		<div class="logo"><img  src="../assets/v2ex.png"></div>

	</div>
</template>
<script>
	export default {
		name:'index',

		 ready (){
            setTimeout(() => {
                this.$route.router.go({ name: 'list'});
            },2000);
        }
	}
</script>
<style>
	.screen{
			position: relative;
			text-align: center;
	        width: 100%;
	        height: 100%;
	        background-image: url('../assets/pattern.png');
	    }
	    .logo{
	    	position: relative;
	    	top: 50%;
	    }
</style>
