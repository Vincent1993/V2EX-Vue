<template>
	<div class="conHead" v-show="show">
		<header class="container postManMeta">
			<div class="postManHeader row">
				<div class="col-md-6">
					<div class="V-left">
						<div class="postManMeta-avatar" v-link="{ name: 'user',params: { username: conHeadCon.member.username}}">
							<a class="avatar"><img :src="conHeadCon.member.avatar_normal" class="avatar-img"></a>
						</div>
						<div class="postManMeta-summary">
							<a v-link="{ name: 'user',params: { username: conHeadCon.member.username}}">{{conHeadCon.member.username}}</a>
							<span class="postManMeta-inline">发布于 {{conHeadCon.created | getLastTimeStr true}}</span>
						</div>
					</div>
				</div>
			</div>
		</header><!-- /header -->
		<div class="layout-inner">
			<h3 class="con-title">{{conHeadCon.title}}</h3>
		</div>
		<div class="con-info">
			<span class="wordage">字数{{conHeadCon.content.length}}</span>
			<span class="replies">回复{{conHeadCon.replies}}</span>
		</div>
		<!--{{{}}}这个可以将内容里的HTML标签一并渲染出来-->
		<div class="con-article">{{{conHeadCon.content_rendered}}}</div>
	</div>
</template>
<script>
import MD from 'markdown'
import store from '../store'

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
				const params = $.param({id:_self.$parent.$route.params.id})
				store.fetchItemsByTag('topics/show.json?'+ params).then(items => {
				    _self.conHeadCon = items[0]
				    setTimeout(function(){
				    	_self.$dispatch('showLoad',false)
				    }, 1000)
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
	.header.container.postManMeta {
		    padding-bottom: 20px;
		    border-bottom: 1px solid #eeeeee;
		    margin-bottom: 30px;
		}
	.V-left{
		float: left;
	}
	.postManMeta-avatar{
		display: table-cell;
	}
	.avatar-img{
		border-radius: 100%;
		padding: 0 5px;
	}
	.postManHeader {
	    border-bottom: 1px solid #eee;
	    padding-bottom: 10px;
	}
	.postManMeta-summary{
		display: table-cell;
	}
	.con-article{
		text-indent: 32px;
		word-break: break-all;
		padding: 10px 0;
		color: #2f2f2f;
		font-size: 16px;
		line-height: 1.7;
	}
	.con-info{
		text-align: left;
		font-size: 13px;
		color:#eee;
	}
	.con-info span {
		margin-right: 10px;
	}
	.con-title{
		font-weight: 400;
		font-style: normal;
	}
	.author-img {
	    display: inline-block;
	    float: right;
	    margin: 5px;
	}
	.replys{
		overflow-x: hidden;
		word-break: break-all;
	}
</style>
