<template>
	<nav-con :title="'节点'"></nav-con>
		<load-con :show="showLoad"></load-con>
		<div class="node-list wrap" v-show="!showLoad">
		<div>
			<input type="text" class="input-text" v-model="nodetitle" placeholder="搜索节点名称...">
			<!-- <i class="fa fa-search"></i> -->
		</div>
			<a class="node-item"
			v-link="{ name: 'list',query: { nodeid: node.id,nodename:node.title}}"
			v-for="node in nodeList | filterBy nodetitle in 'title'">
			{{node.title }}
			<span class="badge topics-num">{{node.topics}}</span>
			</a>
		</div>
</template>
<script>
	import loadCon from '../components/loading.vue'
	import navCon from '../components/Nav.vue'
	import store from '../store'
	export default {
		name:'Node',

		data(){
			return {
				nodeList:[],
				showLoad:false,
				nodetitle:''
			}
		},
		ready(){
			this.getAllNode()
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
			loadCon,
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
	.input-text{
		border: 2px solid #A09C9D;
	    box-shadow: none;
	    font-size: 16px;
	    padding: 5px 5%;
	    border-radius: 0;
	    height: auto;
	    width: 90%;
	    text-align: center;
	}
</style>
