<template>
	<nav class="gloable-nav navbar" :class="{'nav-border':showNavBorder}">
		<div class="nav-brand">V2EX</div>
		<div class="nav-bars" @click="showDropDown()">
			<i class="fa fa-bars fa-large" :class="{ 'fa-bars': !showDrop, 'fa-close': showDrop }"></i>
		</div>
		<span class="nav-title">{{title}}</span>
		<ul class="nav-list" v-show="showDrop">
			<li v-link="{ name: 'list',query: { tag: 'latest'}}"><i class="fa fa-clock-o"><span>最新</span></li>
			<li v-link="{ name: 'list',query:{tag:'hot'}}"><i class="fa fa-fire"><span>最热</span></li>
			<li v-link="{ name : 'node'}"><i class="fa fa-folder"></i><span>节点</span></li>
			<li @click="toggleMan"><i class="fa fa-user"><span>个人</span></li>
		</ul>
	</nav>
</template>
<script>
	import store  from '../store'
	export default {
		name:'nav',
		props:['title'],
		el:'navbar',
		data(){
			return{
				showDrop:false
			}
		},

		methods:{
			showDropDown(){
				this.showDrop = !this.showDrop
			},
			toggleLatest(){
				this.showDropDown()
				this.$route.router.go({name:'list',query:{tag:'latest'}})
			},
			toggleHot(){
				this.showDropDown()
				this.$route.router.go({name:'list',query:{tag:'hot'}})
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
		margin: 0 auto;
		width: 300px;
		left: 0;
		right: 0;
		top:0;
		bottom:0;
	    font-size: 20px;
	    text-align: center;
	    line-height: 50px;
	}
</style>
