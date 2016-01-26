<template>
	<div class="conReply" v-show="show" v-for="reply in replyDatas">
		<div class="man-avater list-inline">
			<img class="avatar-img" :src="reply.member.avatar_mini">
		</div>
		<!-- <div class="floor list-inline">
			<span>#{{$index+1}}</span>
		</div> -->
		<ul class="replys list-inline">
			<li class="username" v-link="{ name: 'user',params: { username: reply.member.username}}"><a>{{reply.member.username}}</a></li>
			<li class="reply-time">回复于 {{reply.created | getLastTimeStr true}}</li>
			<div class="reply-con">{{{reply.content_rendered}}}</div>
		</ul>
	</div>
</template>
<script>
import store from '../store'

	export default {
		name:'Reply',
		props:['show'],

		data(){
			return {
				replyDatas:{}
			}
		},

		methods:{
			getReplyById(){
				var _self = this
				const params = _self.$route.params.id
				store.fetchItemsByTag('replies/show.json?topic_id='+ params).then(items => {
				    _self.replyDatas = items
				})
			}
		}
	}
</script>
<style>
	.man-avater{
		padding: 0 5px;
		float: left;
	}
	.man-avater img{
		border-radius: 100%;
	}
	.reply-time{
		color:#9C9C9C;
		font-size: 13px;
	}
	.floor{
		float: right;
	}
	.conReply{
		padding: 10px;
	}
	.replys{
		max-width: 85%;
	}
</style>
