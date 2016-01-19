<template>
    <router-view
    v-ref:list
      keep-alive>
    </router-view>
</template>
<style>
	body{
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Open Sans","Helvetica Neue",sans-serif;
		font-size: 14px;
		line-height: 1.5;
		color: #333;
		background-color: #fff;
	}
	img{
		max-width: 300px!important;
	}
	ul{
		list-style-type: none;
	}
</style>
