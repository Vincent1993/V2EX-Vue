<template>
    <div class="conHead">
        <header class="postManMeta">
            <div class="postManHeader">
                <router-link :to="{ name: 'user',query: { username: content.member.username}}">
                    <div class="postManMeta-avatar">
                        <a class="avatar"><img :src="content.member.avatar_normal" class="avatar-img"></a>
                    </div>
                </router-link>
                <div class="postManMeta-summary">
                    <router-link :to="{ name: 'user',query: { username: content.member.username}}">{{content.member.username}}</router-link>
                    <span class="postManMeta-inline">发布于 {{timeFilter(content.created, true)}}</span>
                </div>
            </div>
        </header>
        <div class="layout-inner">
            <h3 class="con-title">{{content.title}}</h3>
        </div>
        <div class="con-info">
            <span class="wordage">字数{{content.content.length}}</span>
            <span class="replies">回复{{content.replies}}</span>
        </div>
        <div class="con-article" v-html="content.content_rendered"></div>
    </div>
</template>
<script>
    import { getLastTimeStr } from 'utils/filters';
    export default {
        name: 'ContentHead',
        props: {
            content: {
                type: Object,
                default: () => {},
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
    .header.container.postManMeta {
            padding-bottom: 20px;
            border-bottom: 1px solid #eeeeee;
            margin-bottom: 30px;
        }
    .postManMeta-avatar{
        display: table-cell;
    }
    .avatar-img{
        border-radius: 100%;
        padding: 0 5px;
    }
    .postManHeader {
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
    }
    .postManMeta-summary{
        display: table-cell;
        vertical-align: middle;
    }
    .con-article{
        text-indent: 32px;
        word-break: break-all;
        padding: 10px 0;
        color: #2f2f2f;
        font-size: 16px;
        line-height: 1.7;
    }
    .con-info{
        text-align: left;
        font-size: 13px;
        color:#9C9C9C;
    }
    .con-info span {
        margin-right: 10px;
    }
    .con-title{
        font-weight: 400;
        font-style: normal;
    }
    .author-img {
        display: inline-block;
        float: right;
        margin: 5px;
    }
    .replys{
        overflow-x: hidden;
        word-break: break-all;
    }
</style>
