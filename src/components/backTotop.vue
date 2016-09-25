<template>
    <div class="iconfont" v-if="showGoTop" @click="goTop">
        <img class="icon-top" src="../assets/iconfont-rocket.png">
    </div>
</template>
<script>
    export default {
        name: 'BackTotop',
        data() {
            return {
                showGoTop: false
            };
        },
        methods: {
            goTop() {
                window.scrollTo(0, 0);
            }
        },
        mounted() {
            window.onscroll = () => {
                const self = this;
                if (document.body.scrollTop > 100 && self.showGoTop) {
                    self.showGoTop = true;
                } else {
                    self.showGoTop = false;
                }
            };
        }
    };
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
