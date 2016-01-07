<template>
    <div>
    	<!--公共导航栏-->
        <nav-con></nav-con>
        <div id="wrap">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-md-9">
						<ul class="nav nav-tabs">
		                    <li class="active"><span>最新的</span></li>
		                    <li><span>热门的</span></li>
		                    <li><span>热门的</span></li>
		                </ul>

		                	<item-con v-ref:listItem></item-con>
					</div>
				</div>
			</div>
        </div>
    </div>
</template>

<script>
import navCon from '../components/Nav.vue'
import itemCon from '../components/Item.vue'

export default {

  name: 'List',

  data(){
  	return{
  		topics:{}
  	}
  },

  components:{
    navCon,
    itemCon
  },

  ready(){
  	this.getTopics()
  },


  methods:{
  	getTopics (searchKey){
  	    this.$http.get('https://www.v2ex.com/api/topics/latest.json',(data)=> {
  	        if(data){
  	            this.$refs.listitem.items = data
  	        }
  	    })
  	},
  }

}
</script>
<style>
	#wrap{
		height: 1500px;
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
