<template>
<div class="iconfont" v-show="show" @click="goTop"><img class="icon-top" src="../assets/iconfont-rocket.png"></div>
</template>
<script>
    export default {
    	name:'backTotop',
        replace:true,
        data (){
            return {
                show: false,
            }
        },
        ready (){
			window.onscroll = function() {myFunction()};
			const self = this
			function myFunction() {
			    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			        self.show = true
				}else{
					self.show = false
				}
			}
        },
        methods:{
            goTop (){
                window.scrollTo(0,0);
                this.show = false;
            }
        }
    }
</script>
<style>
    .icon-top {
        position: fixed;
        width: 40px;
        right: 15px;
        bottom: 80px;
        z-index: 9999;
    }
</style>
