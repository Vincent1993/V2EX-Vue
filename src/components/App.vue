<template>
    <div>
        <nav-bar :nav-list="navList" :title="currentTitle"></nav-bar>
        <Loading v-show="showLoading"></Loading>
        <router-view v-show="!showLoading" class="wrapper"></router-view>
        <back-to-top></back-to-top>
    </div>
</template>
<script>
    import NavBar from 'components/Nav';
    import BackToTop from 'components/BackToTop';
    import Loading from 'components/Loading';
    import { TOP_NAV_LIST } from '../config';
    import { mapGetters } from 'vuex';
    export default {
        name: 'App',
        data() {
            return {
                navList: TOP_NAV_LIST
            };
        },
        components: {
            NavBar,
            BackToTop,
            Loading
        },
        computed: {
            ...mapGetters(['showLoading']),
            currentTitle() {
                return this.$route.meta.title ? this.$route.meta.title : this.tagOrNode;
            },
            tagOrNode() {
                if (this.$route.query.key) {
                    if (this.$route.query.key === 'latest') {
                        return '最新';
                    } else if (this.$route.query.key === 'hot') {
                        return '最热';
                    }
                } else {
                    return this.$route.query.node.split('!')[1];
                }
            }
        }
    };
</script>
<style>
    html{
        height: 100%;
        width: 100%;
    }
    body{
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Open Sans","Helvetica Neue",sans-serif,"Microsoft YaHei";
        font-size: 14px;
        line-height: 1.5;
        height: 100%;
        color: #333;
        background-color: #fff;
    }
    img{
        max-width: 300px!important;
    }
    ul li{
        list-style-type: none;
    }
    a{
        color: #aaaaaa;
    border-radius: 4px;
    transition: all 0.1s linear;
    font-size: 13px;
    margin-left: 5px;
    font-weight: 600;
    border: 1px solid transparent;
    text-decoration: none;
    }
    .wrapper{
        height: auto;
        margin: 60px 10px 0;
        overflow: auto;
        word-wrap: break-word;
    }
</style>
