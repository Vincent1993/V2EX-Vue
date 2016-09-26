<template>
    <div class="content-wrap">

        <Topic-Content :content="currentTopicContent"></Topic-Content>
        <Topic-Reply :reply-data="currentTopicReply"></Topic-Reply>
    </div>
</template>
<script>
    import TopicContent from 'components/Topic/Content';
    import TopicReply from 'components/Topic/Reply';
    import { mapActions, mapGetters } from 'vuex';
    export default{
        name: 'Content',
        components: {
            TopicContent,
            TopicReply
        },
        created() {
            this.showLoading();
            Promise.all([
                this.getTopicReplyInfoIfNeed(this.currentTopicId),
                this.getTopicContentInfoIfNeed(this.currentTopicId)
            ])
            .then(() => {
                this.hideLoading();
            });
        },
        methods: {
            ...mapActions(['getTopicReplyInfoIfNeed', 'getTopicContentInfoIfNeed', 'showLoading', 'hideLoading'])
        },
        computed: {
            /** 返回当前主题ID */
            currentTopicId() {
                return this.$route.query.topicId ? this.$route.query.topicId : 0;
            },
            /** 返回当前ID的主体内容 */
            currentTopicContent() {
                if (!this.topicsData.items[this.currentTopicId]) {
                    return {};
                }
                return this.topicsData.items[this.currentTopicId][0];
            },
            currentTopicReply() {
                if (!this.repliesData.items[this.currentTopicId]) {
                    return [];
                }
                return this.repliesData.items[this.currentTopicId];
            },
            ...mapGetters(['topicsData', 'repliesData'])
        }
    };
</script>
<style>
    .content-wrap{
        padding: 15px;
        margin-top: 60px;
    }
</style>
