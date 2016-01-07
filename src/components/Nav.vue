<template>
<div class="gloable-nav">
	<nav class="navbar navbar-inverse">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" @click="toggleSlide">
	        <span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand" href="#">V2EX</a>
	    </div>
	  </div>
	</nav>
	<div class="slide-bar" v-show="showSlide">
		<ul>
			<li>最新</li>
			<li>最热</li>
			<li>关注</li>
		</ul>
	</div>
</div>
</template>
<script>
	export default {
		name:'nav',

		data(){
			return{
				showSlide:false
			}
		},

		methods:{
			toggleSlide(){
				this.showSlide = !this.showSlide
			}
		}
	}
</script>
<style>
	.gloable-nav{
		width: 100%;
		height: 50px;
		top:0;
	}
	nav{
		width: 100%;
		height: 50px;
		background-color:#333;
	}
	.slide-bar{
		z-index: 100;
		background-color: #eee;
	}
</style>
