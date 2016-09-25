<template>
    <div class="conReply" v-for="reply in replyData">
        <div class="man-avater list-inline">
            <img class="avatar-img" :src="reply.member.avatar_mini">
        </div>

        <ul class="replys list-inline">
            <li class="username" v-link="{ name: 'user',params: { username: reply.member.username}}"><a>{{reply.member.username}}</a></li>
            <li class="reply-time">回复于 {{reply.created | getLastTimeStr true}}</li>
            <div class="reply-con">{{{reply.content_rendered}}}</div>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'TopicReply',
        props: {
            replyData: {
                type: Array,
                default: () => [],
                required: true
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
