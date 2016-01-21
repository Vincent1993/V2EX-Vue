<template>
	<nav-con :title="'个人'"></nav-con>
	<div class="wrap member">
		<load-con :show="showLoad"></load-con>
		<div class="member-stauts" v-show="!showLoad">
			<ul>
				<li class="avatar-big"><img class="avatar-img" :src="userInfo.avatar_large"></li>
				<li class="member-username"><h2>{{userInfo.username}}</h2></li>
				<li class="member-create_time"><i class="fa fa-clock-o">加入于{{userInfo.created | getLastTimeStr false}}</i></li>
				<li class="member-location"><i class="fa fa-map-pin">{{userInfo.location | hasLocation}}</i></li>
				<li class="member-tagline">{{userInfo.tagline}}</li>
			</ul>
		</div>
		<div class="member-post-list" v-show="!showLoad">
			<div class="post-head">
				<strong>发布的帖子</strong>
			</div>
			<div class="post-item" v-for="userReply in userReplys">
				<div class="postMeta">
					<div class="avatar"><img class="avatar-img" :src="userInfo.avatar_mini"></div>
					<div class="username"><a>{{userInfo.username}}</a> in {{userReply.node.title}}</div>
					<div class="created-time">{{userReply.created | getLastTimeStr true}}</div>
				</div>
				<section class="postCon">
					<h4 class="postCon-title" v-link="{ name: 'content',params: { id: userReply.id}}">{{userReply.title}}</h4>
				</section>
			</div>
		</div>
	</div>
</template>
<script>
	import loadCon from '../components/loading.vue'
	import navCon from '../components/Nav.vue'
	import store from '../store'
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
				if (this.$route.params.username === sessionStorage.userId) {
					if (this.$route.params.username === localStorage.username) {
						this.getUserInfo()
						this.getUserReply()
					}else{

					};
					this.showLoad = false
				}else{
					this.getUserInfo()
					this.getUserReply()
				};

			}
		},

		methods:{
			//获取用户信息
			getUserInfo(){
				const _self = this
				_self.showLoad = true
				const params = _self.$route.params.username
				sessionStorage.userId = _self.$route.params.username
				store.fetchItemsByTag('members/show.json?username=' + params).then(items => {
				    _self.userInfo = items || []
				    setTimeout(function(){
				        _self.showLoad = false
				    }, 1000)
				})
			},
			//获取用户回复
			getUserReply(){
				const _self = this
				_self.showLoad = true
				const params = _self.$route.params.username
				store.fetchItemsByTag('topics/show.json?username=' + params).then(items => {
				    _self.userReplys = items || []
				    setTimeout(function(){
				        _self.showLoad = false
				    }, 1000)
				})
			}
		},

		filters:{
			hasLocation(){
				return this.userInfo.location ?  this.userInfo.location:'未知的星球'
			}
		},

		components:{
			loadCon,
			navCon
		}
	}
</script>
<style>
	.member-tagline{
		color: rgba(0,0,0,0.6);
		font-size: 18px;
		outline: 0;
		word-break: break-word;
		word-wrap: break-word;
	}
	.postMeta div{
		display: table-cell;
		padding-right: 5px;
	}
	.member-reply{
		margin-top: 20px;
	}
	.avatar-big{
		float: right;
	}
	.post-head {
	    margin: 10px 0;
	    padding-bottom: 5px;
	    border-bottom: 1px solid #eee;
	}
	.post-item {
	    margin: 10px 0;
	    padding-bottom: 10px;
	    border-bottom: 1px solid #eee;
	}

</style>
