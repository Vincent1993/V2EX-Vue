<template>
	<div class="member">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<load-con :show="showLoad"></load-con>
					<div class="member-stauts" v-show="!showLoad">
						<ul class="list-inline">
							<li class="avatar-big"><img :src="userInfo.avatar_large"></li>
							<li class="username">{{userInfo.username}}</li>
							<span class="split">·</span>
							<li class="create_time">加入于 {{userInfo.created | getLastTimeStr false}}</li>
						</ul>
					</div>
					<div class="panel panel-default member-reply" v-show="!showLoad">
					   <div class="panel-heading">{{userInfo.username}}的主题</div>
					   <div class="panel-body">
					    		<ul class="list-inline">
					    			<li v-for="userReply in userReplys" class="reply-item">
					    				<div class="reply" v-link="{ name: 'content',params: { id: userReply.id}}">{{userReply.title}}</div>
					    				<div class="floor">#{{$index+1}}</div>
					    				<div>{{userReply.created | getLastTimeStr true}}</div>
					    			</li>
					    		</ul>
					   </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import loadCon from '../components/loading.vue'
	export default{
		name:'Member',

		data(){
			return{
				userInfo:{},
				userReplys:{},
				showLoad:false
			}
		},

		route:{
			data(){
				this.getUserInfo()
				this.getUserReply()
			}
		},

		methods:{
			getUserInfo(){
				var _self = this
				_self.showLoad = true
				var params = $.param({username:_self.$route.params.username})
				_self.$http.get('http://localhost:8090/api/members/show.json?'+ params,(data) => {
					if (data) {
						_self.userInfo = data
						setTimeout(function(){
							_self.showLoad = false
						}, 1000)
					};
				})
			},
			getUserReply(){
				var _self = this
				_self.showLoad = true
				var params = $.param({username:_self.$route.params.username})
				_self.$http.get('http://localhost:8090/api/topics/show.json?'+ params,(data) => {
					if (data) {
						_self.userReplys = data
						setTimeout(function(){
							_self.showLoad = false
						}, 1000)
					};
				})
			}
		},

		components:{
			loadCon
		}
	}
</script>
<style>
	.member-reply{
		margin-top: 20px;
	}
	.reply-item{
		margin: 5px;
		border-bottom: 1px solid #eee;
		min-width: 100%;
	}
	.reply{
		width: 100%;
		word-break: break-all;
		overflow-x:hidden;
	}

</style>
