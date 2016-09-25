/*
* @Author: Vincent1993
* @Date:   2016-09-24 11:09:15
* @Last Modified by:   Vincent1993
* @Last Modified time: 2016-09-25 21:43:34
*/

import Vue from 'vue';
import Router from 'vue-router';
import Index from 'views/IndexPage';
import Hot from 'views/Hot';
import Topic from 'views/Topic';
import Node from 'views/Node';
import User from 'views/User';
import Login from 'views/Login';

Vue.use(Router);
export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/list',
            name: 'list',
            component: Hot
        },
        {
            path: '/topic',
            name: 'topic',
            component: Topic
        },
        {
            path: '/node',
            name: 'nodelist',
            component: Node
        },
        {
            path: '/user/:username/',
            name: 'user',
            component: User
        }

    ]
});
