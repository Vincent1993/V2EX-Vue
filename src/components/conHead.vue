<template>
	<div class="conHead" v-show="show">
		<h3 class="con-title">{{conHeadCon.title}}</h3>
		<div class="author-img">
			<img :src="conHeadCon.member.avatar_normal">
		</div>
		<div class="con-author">
			<ul class="list-inline">
				<li class="author">By {{conHeadCon.member.username}}</li>
				<span class="split">·</span>
				<li class="create-time">At {{conHeadCon.created | getLastTimeStr true}}</li>
				<span class="split">·</span>
				<li class="create-time">{{conHeadCon.replies}} 个回复</li>
			</ul>
		</div>
		<div class="con-article">{{conHeadCon.content }}</div>
	</div>
</template>
<script>
import MD from 'markdown'
	export default {
		name:'conHead',
		props:['show'],
		data(){
			return{
				conHeadCon:{}
			}
		},

		methods:{
			getConById(){
				const _self = this
				_self.$dispatch('showLoad',true)
				let params = $.param({id:_self.$parent.$route.params.id})
				_self.$http.get('https://www.v2ex.com/api/topics/show.json?'+ params,(data) =>{
					if (data) {
						_self.conHeadCon = data[0]
						setTimeout(function(){
							_self.$dispatch('showLoad',false)
						}, 1000)
					};
				})
			}
		},

		filters:{
			markdown(content){
				return content || MD.toHTML(content)
			}
		}
	}
</script>
<style>
	.con-article{
		text-indent: 1rem;
		word-break: break-all;
		padding: 10px 0;
	}
	.con-title{
		display: inline-block;
	}
	.author-img {
	    display: inline-block;
	    float: right;
	    margin-right: 5px;
	}
</style>
