<template>
    <section>
        <div class="conReply" :key="reply.id" v-for="reply in replyData" >
            <div class="man-avater list-inline">
                <img class="avatar-img" :src="reply.member.avatar_mini">
            </div>
            <ul class="replys list-inline">
                <li class="username">
                    <router-link :to="{ name: 'user',params: { username: reply.member.username}}">
                        {{reply.member.username}}
                    </router-link>
                </li>
                <li class="reply-time">回复于 {{timeFilter(reply.created, true)}} </li>
                <div class="reply-con">
                    <span v-html="reply.content_rendered"></span>
                </div>
            </ul>
        </div>
    </section>
</template>
<script>
    import { getLastTimeStr } from 'utils/filters';
    export default {
        name: 'TopicReply',
        props: {
            replyData: {
                type: Array,
                default: () => [],
                required: true
            }
        },
        methods: {
            timeFilter(date, friendily, format) {
                return getLastTimeStr(date, friendily, format);
            }
        }
    };
</script>
<style>
    .man-avater{
        padding: 0 5px;
        float: left;
    }
    .man-avater img{
        border-radius: 100%;
    }
    .reply-time{
        color:#9C9C9C;
        font-size: 13px;
    }
    .floor{
        float: right;
    }
    .conReply{
        padding: 10px;
    }
    .replys{
        max-width: 85%;
    }
</style>
