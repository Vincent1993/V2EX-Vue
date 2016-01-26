<template>
    <nav-con :title="nodeName"v-ref:navcon></nav-con>
    <div class="wrap">
						<load-con :show="showLoad"></load-con>
            <fail-con :show="showFail"></fail-con>
		        <item-con :show="!showLoad" v-ref:listItem></item-con>
            <back-totop></back-totop>
    </div>
</template>

<script>
import itemCon from '../components/Item.vue'
import loadCon from '../components/loading.vue'
import failCon from '../components/fail.vue'
import navCon from '../components/Nav.vue'
import backTotop from '../components/backTotop.vue'
import store from '../store'

export default {

  name: 'List',

  data(){
  	return{
  		navActive:true,
  		showLoad:false,
      shwoFail:false,
      nodeName:'最新'
  	}
  },

  components:{
    itemCon,
    loadCon,
    navCon,
    failCon,
    backTotop
  },

  ready(){
    this.getLatest()
    this.$route.query.tag = 'latest'
  },

  route:{
    data(){
        const query = this.$route.query.tag,
        nodeid = this.$route.query.nodeid,
        nodename = this.$route.query.nodename
        this.$refs.navcon.showDrop = false

        if (query !== sessionStorage.query) {
           if (query === "latest") {
            this.getLatest()
          } else if (query === "hot") {
            this.getHot()
          } else if(nodeid){
              if (nodeid != sessionStorage.nodeid) {};
            this.getListByNode(nodeid,nodename)
          }
        }
    }
  },

  methods:{
  	//获取最新列表
  	getLatest (){
  		const _self = this
      _self.showLoad = true
      _self.nodeName = "最新"
      sessionStorage.query = 'latest'
      store.fetchItemsByTag('topics/latest.json').then(items => {
          _self.$refs.listitem.items = items || []
          setTimeout(function(){
              _self.showLoad = false
          }, 1000)
      }).then(err => {
        _self.showFail = true
      })
  	},
  	//获取热门列表
  	getHot(){
	    const _self = this
      _self.showLoad = true
      _self.nodeName = "最热"
      sessionStorage.query = 'hot'
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
        const params = nodeid
        sessionStorage.query = nodeid
        _self.nodeName = nodename
        _self.showLoad = true
        store.fetchItemsByTag('topics/show.json?node_id=' + params).then(items => {
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
    margin: 60px 10px 0;
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
