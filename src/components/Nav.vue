<template>
	<nav class="gloable-nav nabar" :class="{'nav-border':showNavBorder}">
		<div class="nav-brand">V2EX</div>
		<div class="nav-bars" @click="showDropDown()">
			<i class="fa fa-bars fa-large" :class="{ 'fa-bars': !showDrop, 'fa-close': showDrop }"></i>
		</div>
		<span class="nav-title">{{title}}</span>
		<ul class="nav-list" v-show="showDrop">
			<li @click="toggleLatest()"><i class="fa fa-clock-o"><span>最新</span></li>
			<li @click="toggleHot()"><i class="fa fa-fire"><span>最热</span></li>
			<li @click="toggleMan()"><i class="fa fa-user"><span>个人</span></li>
		</ul>
	</nav>
</template>
<script>
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
			toggleMan(){
				this.showDropDown()
				if (localStorage.username) {
					this.$route.router.go({name:'user',params: { username: localStorage.username }})
				}else{
					this.$route.router.go('login')
				};

			}
		},

		computed:{
			showNavBorder(){
				return window.pageYOffset >=50 ? false:true
			}
		}
	}
</script>
<style>
	.gloable-nav{
		background: #fff;

		height: 50px;
		width: 100%;
		position: fixed;
		top: 0;
	}
	.nav-border{
		border-bottom: 1px solid #f2f2f2;
    	box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
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
	    height: auto;
	    width: 80px;
	    background-color: #fff;
	    z-index: 1;
	    border: 1px solid #ccc;
	    border-radius: 0 0 5px 5px;
	}
	.nav-list li{
		font-size: 18px;
		padding: 2px;
		text-align: center;
	}
	.nav-list li span{
		margin-left: 5px;
	}
	.nav-title {
		position: absolute;
		left: 45%;
	    font-size: 20px;
	    line-height: 50px;
	}
</style>
