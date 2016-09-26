<template>
    <div>
        <List :list-data="currentTagTopicList"></List>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex';
    import List from 'components/List';
    export default {
        name: 'HotList',
        components: {
            List
        },
        methods: {
            ...mapActions(['getListByTagIfNoCache', 'showLoading', 'hideLoading']),
            fetchData(tag) {
                this.$store.dispatch('showLoading');
                Promise.all([
                    this.$store.dispatch('getListByTagIfNoCache', tag)
                ])
                .then(() => {
                    this.$store.dispatch('hideLoading');
                });
            }
        },
        computed: {
            currentTag() {
                return this.$route.query.key;
            },
            currentTagTopicList() {
                if (!this.topicList[this.currentTag]) {
                    return [];
                }
                return this.topicList[this.currentTag];
            },
            ...mapGetters(['topicList'])
        },
        watch: {
            '$route'() {
                this.fetchData(this.currentTag);
            }
        },
        created() {
            this.fetchData(this.currentTag);
        }
    };
</script>
