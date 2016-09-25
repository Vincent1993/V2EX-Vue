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
            ...mapActions(['getHotList'])
        },
        computed: {
            ...mapGetters(['hotListData'])
        },
        created() {
            this.$store.dispatch('getHotList');
        }
    };
</script>
