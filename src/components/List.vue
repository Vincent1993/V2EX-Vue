<template>
<div class="steam-list" >
    <section class="steam-list-item" v-for="item in listData" :key="item.id">
        <div class="man-picture">
            <img class="avatar-img" :src="item.member.avatar_mini">
        </div>
        <div class="summary">
            <div class="title">
                <router-link :to="{ name: 'topic' ,query: { topicId: item.id}}">{{item.title}}</router-link>
            </div>
            <ul class="list-inline tags">
                <li class="tag">{{item.node.title}}</li>
                <span class="split">·</span>
            </ul>
            <ul class="list-inline user-info">
                <li class="author">
                    <router-link :to="{ name: 'user',params: { username: item.member.username}}">{{item.member.username}}</router-link>
                </li>
                <span class="split">·</span>
                <li class="last-modify-time">{{timeFilter(item.last_modified, true)}}回复</li>
            </ul>
        </div>
    </section>
</div>
</template>
<script>
    import { getLastTimeStr } from 'utils/filters';
    export default {
        name: 'list',
        props: {
            listData: {
                type: Array,
                default: () => [],
                required: true
            }
        },
        methods: {
            timeFilter(data, friendily) {
                return getLastTimeStr(data, friendily);
            }
        }
    };
</script>
<style>
    .steam-list{
        margin-top: 10px;
    }
    .man-picture{
        padding: 5px;
        margin-right: 10px;
    }
    .list-inline{
        margin: 0;
        padding:0;
        display: table-cell;
    }
    .list-inline>li{
        padding: 0 5px;
        display: inline-block;
        cursor: pointer;
    }
    .steam-list-item{
        width: 100%;
        display: inline-flex;
        border-bottom: 1px solid #eee;
        padding: 5px 0;
    }
    .summary{
        overflow: auto;
        overflow-x: hidden;
    }
    .title{
        font-size: 17px;
        padding-left: 5px;
        cursor: pointer;
    }
    .author {
        font-size: 13px;
        color: #999;
    }

</style>
