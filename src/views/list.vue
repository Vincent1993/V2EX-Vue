<template>
    <div>
    	<!--公共导航栏-->
        <nav-con></nav-con>
        <div id="wrap">
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
import navCon from '../components/Nav.vue'
import itemCon from '../components/Item.vue'
import loadCon from '../components/loading.vue'

export default {

  name: 'List',

  data(){
  	return{
  		navActive:true,
  		showLoad:false
  	}
  },

  components:{
    navCon,
    itemCon,
    loadCon
  },

  ready(){
  	this.getLatest()
  },


  methods:{
  	//获取最新列表
  	getLatest (){
  		this.showLoad = true
  	    this.$http.get('https://www.v2ex.com/api/topics/latest.json',(data)=> {
  	        if(data){
  	        	this.showLoad = false
  	            this.$refs.listitem.items = data
  	        }
  	    })
  	},
  	//获取热门列表
  	getHot(){
  		this.$http.get('https://www.v2ex.com/api/topics/hot.json',(data)=>{
  			if (data) {
  				this.$refs.listitem.items = data
  			};
  		})
  	}
  }

}
</script>
<style>
	#wrap{
		height: auto;
	}
	.nav-tabs{
		display: flex;
	}
	.nav>li{
		flex-grow:1;
		justify-content:center;
	}
	.active{
		padding-top: 0;
		padding-bottom: 10px;
		background-color: #fff;
		border: none;
		border-bottom: 2px solid #333;
	}
	.nav>li>span{
		padding: 5px;
		font-size: 16px;
	}

</style>
