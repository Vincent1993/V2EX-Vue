<template>
    <div class="node-list wrap">
        <template v-for="node in nodeList">
            <router-link class="node-item" :to="{ name: 'list',query: { node: `${node.id}!${node.title}`}}">
                {{node.title }}
                <span class="badge topics-num">{{node.topics}}</span>
            </router-link>
        </template>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        name: 'NodeList',
        created() {
            this.showLoading();
            if (!this.nodeList.length) {
                Promise.all([
                    this.getAllNodeList();
                ])
                .then(() => {
                    this.hideLoading();
                });
            }
            this.hideLoading();
        },
        computed: {
            ...mapGetters(['nodeList'])
        },
        methods: {
            ...mapActions(['getAllNodeList', 'showLoading', 'hideLoading'])
        }
    };
</script>
<style>
    .node-item{
        font-size: 12px;
        line-height: 12px;
        padding: 4px 10px 4px 10px;
        margin: 5px;
        display: inline-block;
        border: 1px solid #e5e5e5;
    }
    .topics-num{
        margin-left: 2px;
    }
    .input-text{
        border: 2px solid #A09C9D;
        box-shadow: none;
        font-size: 16px;
        padding: 5px 5%;
        border-radius: 0;
        height: auto;
        width: 90%;
        text-align: center;
    }
</style>
