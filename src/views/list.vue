<template>
    	<!--公共导航栏-->
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

export default {

  name: 'List',

  data(){
  	return{
  		navActive:true,
  		showLoad:false,
      node:sessionStorage.node_name
  	}
  },

  components:{
    itemCon,
    loadCon
  },

  ready(){
  	this.getLatest()
  },


  methods:{
  	//获取最新列表
  	getLatest (){
  		var _self = this
      sessionStorage.node_name = '最新'
  		_self.showLoad = true
  	  _self.$http.get('https://www.v2ex.com/api/topics/latest.json',(data)=> {
  	        if(data){
  	            _self.$refs.listitem.items = data
  	            setTimeout(function(){
  	            	_self.showLoad = false
  	            }, 1000)
  	        }
  	    })
  	},
  	//获取热门列表
  	getHot(){
  		var _self = this
      sessionStorage.node_name = '最热'
  		_self.showLoad = true
  		_self.$http.get('https://www.v2ex.com/api/topics/hot.json',(data)=>{
  			if (data) {
  				_self.$refs.listitem.items = data
  				setTimeout(function(){
  	            	_self.showLoad = false
  	            }, 1000)
  			};
  		})
  	},
    //获取相关节点列表
    getListByNode(nodeid,nodename){
        var _self = this
        sessionStorage.node_name = nodename
        var params = $.param({node_id:nodeid})
        _self.showLoad = true
        _self.$http.get('https://www.v2ex.com/api/topics/show.json?'+params,(data)=> {
              if(data){
                  _self.$refs.listitem.items = data
                  setTimeout(function(){
                    _self.showLoad = false
                  }, 1000)
              }
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
