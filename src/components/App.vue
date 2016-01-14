<template>
	<nav-con></nav-con>
    <router-view
	 v-ref:list
      keep-alive>
    </router-view>
</template>
<script>
	import navCon from '../components/Nav.vue'
	export default {
		components:{
			navCon
		}
	}
</script>
<style>
	body{
		font-family: Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,WenQuanYi Micro Hei,Microsoft Yahei,sans-serif;
		font-size: 14px;
		line-height: 1.5;
		color: #333;
		background-color: #fff;
	}
</style>
