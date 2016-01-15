<template>
    <nav-con :title="nodeName"></nav-con>
    <div class="wrap">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-md-9">
						<load-con :show="showLoad"></load-con>
		        <item-con :show="!showLoad" v-ref:listItem></item-con>
					</div>
				</div>
			</div>
    </div>
  </div>
</template>

<script>
import itemCon from '../components/Item.vue'
import loadCon from '../components/loading.vue'
import navCon from '../components/Nav.vue'
import store from '../store'

export default {

  name: 'List',

  data(){
  	return{
  		navActive:true,
  		showLoad:false,
      nodeName:'最新'
  	}
  },

  components:{
    itemCon,
    loadCon,
    navCon
  },

  ready(){
  	this.getLatest()
  },


  methods:{
  	//获取最新列表
  	getLatest (){
  		const _self = this
      _self.showLoad = true
      _self.nodeName = "最新"
      store.fetchItemsByTag('topics/latest.json').then(items => {
          _self.$refs.listitem.items = items || []
          setTimeout(function(){
              _self.showLoad = false
          }, 1000)
      })
  	},
  	//获取热门列表
  	getHot(){
	    const _self = this
      _self.showLoad = true
      _self.nodeName = "最热"
      store.fetchItemsByTag('topics/hot.json').then(items => {
          _self.$refs.listitem.items = items || []
          setTimeout(function(){
              _self.showLoad = false
          }, 1000)
      })
  	},
    //获取相关节点列表
    getListByNode(nodeid,nodename){
        const _self = this
        const params = $.param({node_id:nodeid})
        _self.nodeName = nodename
        _self.showLoad = true
        store.fetchItemsByTag('topics/show.json?' + params).then(items => {
          _self.$refs.listitem.items = items || []
          setTimeout(function(){
              _self.showLoad = false
          }, 1000)
      })
    }
  }

}
</script>
<style>
	.wrap{
		height: auto;
	}
	.nav-tabs{
		display: flex;
	}
	.nav>li{
		flex-grow:1;
		justify-content:center;
	}
	.nav>li>span{
		padding: 5px;
		font-size: 16px;
	}

</style>
