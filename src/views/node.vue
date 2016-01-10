<template>
	<nav-con></nav-con>
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<div class="node-list">
					<a class="node-item" v-link="{ name: 'list',params: { node: node.id}}" v-for="node in nodeList">{{node.title}}<span class="badge topics-num">{{node.topics}}</span></a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import navCon from '../components/Nav.vue'
	export default {
		name:'Node',

		data(){
			return {
				nodeList:{}
			}
		},
		route:{
			data(){
				this.getAllNode()
			}
		},

		methods:{
			getAllNode(){
				var _self = this
				_self.$http.get('https://www.v2ex.com/api/nodes/all.json',(data) => {
					_self.nodeList = data
				})
			}
		},

		components:{
			navCon
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
