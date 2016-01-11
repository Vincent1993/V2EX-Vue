<template>
	<div class="content-wrap">
	<div class="contaier" >
		<div class="row">
			<div class="col-md-6">
		<load-con :show="showLoad"></load-con>
		<con-head v-ref:ConHead :show="!showLoad"></con-head>
		<con-reply v-ref:conReply :show="!showLoad"></con-reply>
		</div>
	</div>
</div>
	</div>
</template>
<script>
	import conHead from '../components/conHead.vue'
	import conReply from '../components/reply.vue'
	import loadCon from '../components/loading.vue'
	export default{
		name:'Content',

		data(){
			return{
				content:Object,
				showLoad:true,
				node:sessionStorage.node_name
			}
		},
		route:{
			data(){
				this.$refs.conhead.getConById()
				this.$refs.conreply.getReplyById()
			}
		},

		components:{
			conHead,
			loadCon,
			conReply
		},

		events:{
			'showLoad':function(boolean){
				this.showLoad = boolean
			}
		}
	}
</script>
<style>
	.content-wrap{
		margin-top: -20px;
		padding: 5px;
	}
</style>
