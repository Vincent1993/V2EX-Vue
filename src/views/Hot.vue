<template>
    <div>
        <List :list-data="hotListData"></List>
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
            ...mapActions(['getHotList', 'showLoading', 'hideLoading'])
        },
        computed: {
            ...mapGetters(['hotListData'])
        },
        created() {
            this.$store.dispatch('showLoading');
            Promise.all([
                this.$store.dispatch('getHotList')
            ])
            .then(() => {
                this.$store.dispatch('hideLoading');
            });
        }
    };
</script>
