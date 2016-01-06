<template>
	<div class="ui attached stackable menu">
	  <div class="ui container">
	    <div class="right item">
	      <div class="ui input"><input type="text" placeholder="Search..."></div>
	    </div>
	  </div>
	</div>
</template>
<script>

	export default {
		name:'nav'
	}
</script>
<style>
	.gloable-nav{
		width: 100%;
		height: 50px;
		position: fixed;
	}
	nav{
		width: 100%;
		height: 50px;
		background-color:#333;
	}
</style>
