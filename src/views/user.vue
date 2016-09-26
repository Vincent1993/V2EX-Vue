<template>
    <div class="member">
        <div class="member-stauts" v-if="currentUserInfo">
            <ul>
                <li class="avatar-big">
                    <img class="avatar-img" :src="currentUserInfo.avatar_large">
                </li>
                <li class="member-username">
                    <h2>{{currentUserInfo.username}}</h2>
                </li>
                <li class="member-create_time">
                    <i class="fa fa-clock-o"></i>
                    加入于{{timeFilter(currentUserInfo.created, false, 'yyyy-MM-dd hh:mm')}}
                </li>
                <li class="member-location" v-if="currentUserInfo.location">
                    <i class="fa fa-map-pin"></i>
                    <span>{{currentUserInfo.location}}</span>
                </li>
                <li class="member-tagline" v-if="currentUserInfo.tagline">
                    {{currentUserInfo.tagline}}
                </li>
            </ul>
        </div>
        <div class="member-post-list">
            <div class="post-head">
                <strong>发布的帖子</strong>
            </div>
            <div class="post-item" v-for="userReply in currentUserPostTopicList">
                <div class="postMeta">
                    <div class="avatar"><img class="avatar-img" :src="currentUserInfo.avatar_mini"></div>
                    <div class="username"><a>{{currentUserInfo.username}}</a> in {{userReply.node.title}}</div>
                    <div class="created-time">at {{timeFilter(userReply.created, true)}}</div>
                </div>
                <section class="postCon">
                    <router-link :to="{ name: 'topic', query: { topicId: userReply.id}}">
                        <h4 class="postCon-title">{{userReply.title}}</h4>
                    </router-link>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
    import { getLastTimeStr } from 'utils/filters';
    export default{
        name: 'User',
        props: {
            // 用户回复帖子
            userReplys: {
                type: Array,
                default: () => []
            },
            // 用户信息
            userInfo: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            ...mapActions(['getUserInfoIfNeed', 'getUserPostInfoIfNeed', 'showLoading', 'hideLoading']),
            timeFilter(date, friendily, format) {
                return getLastTimeStr(date, friendily, format);
            }
        },
        created() {
            this.$store.dispatch('showLoading');
            Promise.all([
                this.$store.dispatch('getUserInfoIfNeed', this.currentUser),
                this.$store.dispatch('getUserPostInfoIfNeed', this.currentUser)
            ])
            .then(() => {
                this.$store.dispatch('hideLoading');
            });
        },
        computed: {
            ...mapGetters(['userInfo', 'userPostList']),
            currentUser() {
                return this.$route.params.username;
            },
            currentUserInfo() {
                return this.userInfo[this.currentUser] ? this.userInfo[this.currentUser] : null;
            },
            currentUserPostTopicList() {
                return this.userPostList[this.currentUser] ? this.userPostList[this.currentUser] : null;
            }
        }
    };
</script>
<style>
    .member-tagline{
        color: rgba(0,0,0,0.6);
        font-size: 18px;
        outline: 0;
        word-break: break-word;
        word-wrap: break-word;
    }
    .postMeta div{
        display: table-cell;
        padding-right: 5px;
    }
    .member-reply{
        margin-top: 20px;
    }
    .avatar-big{
        float: right;
    }
    .post-head {
        margin: 10px 0;
        padding-bottom: 5px;
        border-bottom: 1px solid #eee;
    }
    .post-item {
        margin: 10px 0;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
    }
</style>
