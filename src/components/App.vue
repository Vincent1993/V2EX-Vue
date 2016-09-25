<template>
    <div>
        <nav-bar :nav-list="navList"></nav-bar>
        <router-view class="wrapper"></router-view>
    </div>
</template>
<script>
    import NavBar from 'components/Nav';
    import { TOP_NAV_LIST } from '../config';
    export default {
        name: 'App',
        data() {
            return {
                navList: TOP_NAV_LIST
            };
        },
        components: {
            NavBar
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
    }
</style>
