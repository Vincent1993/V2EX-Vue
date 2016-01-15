<template>
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<load-con :show="showLoad"></load-con>
				<div class="node-list" v-show="!showLoad">
					<a class="node-item" v-link="{ name: 'list',params: { node: node.id}}" v-for="node in nodeList">{{node.title}}<span class="badge topics-num">{{node.topics}}</span></a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import loadCon from '../components/loading.vue'
	import store from '../store'
	export default {
		name:'Node',

		data(){
			return {
				nodeList:[],
				showLoad:false
			}
		},
		route:{
			data(){
				this.getAllNode()
			}
		},

		methods:{
			//获取全部节点
			getAllNode(){
				const _self = this
				_self.showLoad = true
				store.fetchItemsByTag('nodes/all.json').then(items => {
				    _self.nodeList = items || []
				    setTimeout(function(){
				        _self.showLoad = false
				    }, 1000)
				})
			}
		},

		components:{
			loadCon
		}
	}
</script>
<style>
	.node-item{
		font-size: 12px;
	    line-height: 12px;
	    padding: 4px 10px 4px 10px;
	    margin: 5px;
	    display: inline-block;
	    border: 1px solid #e5e5e5;
	}
	.topics-num{
		margin-left: 2px;
	}
</style>
