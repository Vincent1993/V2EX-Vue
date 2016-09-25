<template>
    <div class="fail" v-show="show">
         <img class="fail-img" src="../assets/iconfont-fail.png">
         <div>数据加载失败,请刷新重试</div>
    </div>
</template>
<script>
    export default {
        name: 'Fail',
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            reloadPage() {

            }
        }
    };
</script>
<style>
    .fail{
        width: 50%;
        margin: 300px auto;
        text-align: center;
        &-img{
            width: 50px;
        }
    }
</style>
