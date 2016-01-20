<template>
    <router-view
    v-ref:list
      keep-alive>
    </router-view>
</template>
<style>
	html{
		height: 100%;
		width: 100%;
	}
	body{
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Open Sans","Helvetica Neue",sans-serif;
		font-size: 14px;
		line-height: 1.5;
		height: 100%;
		color: #333;
		background-color: #fff;
	}
	img{
		max-width: 300px!important;
	}
	ul li{
		list-style-type: none;
	}
	a{
		color: #aaaaaa;
    border-radius: 4px;
    transition: all 0.1s linear;
    font-size: 13px;
    margin-left: 5px;
    font-weight: 600;
    border: 1px solid transparent;
    text-decoration: none;
	}
</style>
