<template>
	<nav class="navbar navbar-default navbar-fixed-top gloable-nav" role="banner">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand page-scroll" v-show="isIndex">V2EX</a>

                <span class="glyphicon glyphicon glyphicon-arrow-left back" @click="Back()" v-show="!isIndex"></span>
                <span class="navbar-title">{{title}}</span>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="active"> <a  v-link="'list'" @click="toggleLatest">最新</a></li>
                    <li> <a  v-link="'list'" @click="toggleHot">最热</a></li>
                    <!-- <li><a  v-link="'node'" @click="toggleNode">节点</a></li> -->
                    <li><a>个人</a></li>
                </ul>
            </div>
        </div>
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
				node:''
			}
		},

		methods:{
			toggleCollapse(){
				$("#bs-example-navbar-collapse-1").collapse('hide')
			},
			toggleLatest(){
				this.toggleCollapse()
				this.$parent.getLatest()
			},
			toggleHot(){
				this.toggleCollapse()
				this.$parent.getHot()
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
		box-shadow: 0 1px 4px #eeeeee;
	}
	#bs-example-navbar-collapse-1>ul>li>a{
		text-align: center;
		font-size: 18px;
	}
	.navbar-title {
		position: absolute;
		left: 45%;
	    font-size: 20px;
	    line-height: 52px;
	}
	.back{
		line-height: 50px;
		margin-left: 10px;
	}
</style>
