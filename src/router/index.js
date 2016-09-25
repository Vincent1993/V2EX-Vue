/*
* @Author: Vincent1993
* @Date:   2016-09-24 11:09:15
* @Last Modified by:   Vincent1993
* @Last Modified time: 2016-09-25 11:17:30
*/

import Vue from 'vue';
import Router from 'vue-router';
import Index from 'views/IndexPage';
import Hot from 'views/Hot';
import Topic from 'views/Topic';

Vue.use(Router);
export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/hot',
            name: 'hot',
            component: Hot,
            beforeEnter: () => {
                window.scroll(0, 0);
            }
        },
        {
            path: '/topic',
            name: 'topic',
            component: Topic
        }
    ]
});
