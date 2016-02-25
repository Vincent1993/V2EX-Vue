<template>
	<nav-con :title="'详情'"></nav-con>
	<div class="content-wrap">

		<load-con :show="showLoad"></load-con>
		<con-head v-ref:ConHead :show="!showLoad"></con-head>
		<con-reply v-ref:conReply :show="!showLoad"></con-reply>

	</div>
</template>
<script>
	import conHead from '../components/conHead.vue'
	import conReply from '../components/reply.vue'
	import loadCon from '../components/loading.vue'
	import navCon from '../components/Nav.vue'
	export default{
		name:'Content',

		data(){
			return{
				content:Object,
				showLoad:true,
				hasUpdate:false
			}
		},
		route:{
			data(){
				if (this.$route.params.id === sessionStorage.searchKey) {
					this.showLoad = false
				}else{
					this.$refs.conhead.getConById()
					this.$refs.conreply.getReplyById()
				};
			}
		},

		components:{
			conHead,
			loadCon,
			conReply,
			navCon
		},

		events:{
			'showLoad':function(boolean){
				this.showLoad = boolean
			},
			'title':function(string){
				this.conTitle = string
			}
		}
	}
</script>
<style>
	.content-wrap{
		padding: 15px;
		margin-top: 60px;
	}
</style>
