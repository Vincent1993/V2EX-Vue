<template>
<div class="gloable-nav">
	<nav class="navbar navbar-default" role="banner">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand page-scroll" v-show="!isDetail">V2EX</a>
                <span class="glyphicon glyphicon glyphicon-arrow-left back" v-link="'/list'" v-show="isDetail"></span>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a @click="toggleLatest">最新</a></li>
                    <li><a @click="toggleHot">最热</a></li>
                    <li><a>分类</a></li>
                    <li><a>节点</a></li>
                    <li><a>提醒</a></li>
                    <li><a>个人</a></li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>
<script>
	export default {
		name:'nav',

		data(){
			return{
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
			}
		},

		computed:{
			isDetail() {
				return this.$route.name === 'content'?true:false
			}
		}
	}
</script>
<style>
	.gloable-nav{
		width: 100%;
		height:auto;
		top:0;
	}
	#bs-example-navbar-collapse-1>ul>li>a{
		text-align: center;
		font-size: 18px;
	}
	.back{
		line-height: 50px;
		margin-left: 10px;
	}
</style>
