<template>
    <nav class="gloable-nav navbar">
        <div class="nav-brand">V2EX</div>
        <div class="nav-bars" @click="toggleNavbar">
            <i class="fa fa-bars fa-large" :class="{ 'fa-bars': !showDrop, 'fa-close': showDrop }"></i>
        </div>
        <span class="nav-title">{{title}}</span>
        <ul class="nav-list" v-show="showDrop">
            <template v-for="nav in navList">
                <li :key="nav.key" @click="navItemClick(nav.link, nav.key)">
                    <i :class="navItemClass(nav)"></i>{{nav.value}}
            </template>
        </ul>
    </nav>
</template>
<script>
    export default {
        name: 'NavBar',
        data() {
            return {
                /** @type {Boolean} 是否显示下拉选项 */
                showDrop: false
            };
        },
        props: {
            title: {
                type: String,
                default: null
            },
            navList: {
                type: Array,
                default: () => [],
                required: true
            }
        },
        methods: {
            navItemClass(item) {
                return {
                    fa: true,
                    [`fa-${item.icon}`]: true
                };
            },
            navItemClick(link, key) {
                let route = {};
                if (link === 'list') {
                    route = {
                        name: link,
                        query: { key }
                    };
                } else {
                    route = {
                        name: link
                    };
                }
                this.hideDropDown();
                this.$router.push(route);
            },
            showDropDown() {
                this.showDrop = true;
            },
            hideDropDown() {
                this.showDrop = false;
            },
            toggleNavbar() {
                this.showDrop = !this.showDrop;
            }
        },
        beforeDestroy() {
            this.showDrop = false;
        }
    };
</script>
<style>
    .gloable-nav{
        background: #fff;

        height: 50px;
        width: 100%;
        position: fixed;
        top: 0;
    }
    .nav-border{
        border-bottom: 1px solid #f2f2f2;
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
    }
    .nav-brand{
        float: left;
        padding: 15px;
        font-size: 18px;
        line-height: 20px;
    }
    .nav-bars{
        float: right;
        padding: 15px;
        font-size: 18px;
        line-height: 20px;
    }
    .nav-list{
        padding: 10px;
        margin:0;
        position: absolute;
        right: 5px;
        top: 50px;
        height: auto;
        width: 80px;
        background-color: #fff;
        z-index: 1;
        border: 1px solid #ccc;
        border-radius: 0 0 5px 5px;
    }
    .nav-list li{
        font-size: 18px;
        padding: 2px;
        text-align: center;
    }
    .nav-list li span{
        margin-left: 5px;
    }
    .nav-title {
        position: absolute;
        margin: 0 auto;
        width: 300px;
        left: 0;
        right: 0;
        top:0;
        bottom:0;
        font-size: 20px;
        text-align: center;
        line-height: 50px;
    }
</style>
