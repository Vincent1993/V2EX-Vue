<template>
	<div class="conReply" v-show="show" v-for="reply in replyDatas">
		<div class="man-avater list-inline">
			<img :src="reply.member.avatar_mini">
		</div>
		<div class="floor list-inline">
			<span>#{{$index+1}}</span>
		</div>
		<ul class="replys list-inline">
			<li class="username" v-link="{ name: 'user',params: { username: reply.member.username}}">{{reply.member.username}}</li>
			<li class="reply-time">Reply at {{reply.created | getLastTimeStr true}}</li>
			<div class="reply-con">{{reply.content}}</div>
		</ul>
	</div>
</template>
<script>
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
				const params = $.param({topic_id:_self.$route.params.id})
				_self.$http.get('https://www.v2ex.com/api/replies/show.json?'+ params,(data) => {
					if (data) {
						_self.replyDatas = data
					};
				})
			}
		}
	}
</script>
<style>
	.man-avater{
		padding: 0 5px;
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
