<template>
	<nav class="gloable-nav nabar">
		<div class="nav-brand">V2EX</div>
		<div class="nav-bars" @click="showDropDown()">
			<i class="fa fa-bars fa-large" :class="{ 'fa-bars': !showDrop, 'fa-close': showDrop }"></i>
		</div>
		<ul class="nav-list" v-show="showDrop">
			<li @click="toggleLatest()">最新</li>
			<li @click="toggleHot()">最热</li>
		</ul>
	</nav>
</template>
<script>
	import router from 'vue-router'
	import store  from '../store'
	export default {
		name:'nav',
		props:['title'],

		data(){
			return{
				node:'',
				showDrop:false
			}
		},

		methods:{
			showDropDown(){
				this.showDrop = !this.showDrop
			},
			toggleLatest(){
				this.$parent.getLatest()
				this.showDropDown()
			},
			toggleHot(){
				this.$parent.getHot()
				this.showDropDown()
			},
			Back(){
				history.back(-1)
			}
		},

		computed:{
			isIndex() {
				return this.$route.name === 'list'?true:false
			}
		}
	}
</script>
<style>
	.gloable-nav{
		background: #fff;
		box-shadow: 0 1px 4px #D8D7D7;
		height: 50px;
		width: 100%;
		position: fixed;
		top: 0;
	}
	.nav-brand{
		float: left;
		padding: 15px;
		font-size: 18px;
		line-height: 20px;
	}
	.nav-bars{
		float: right;
		padding: 15px;
		font-size: 18px;
		line-height: 20px;
	}
	.nav-list{
		padding: 10px;
		margin:0;
	    position: absolute;
	    right: 5px;
	    top: 50px;
	    height: 50px;
	    width: 100px;
	    background-color: #fff;
	    z-index: 1;
	    border: 1px solid #ccc;
	    border-radius: 0 0 5px 5px;
	}
	.nav-list li{
		font-size: 18px;
		line-height: 1;
	}
	.navbar-title {
		position: absolute;
		left: 45%;
	    font-size: 20px;
	    line-height: 52px;
	}
</style>
