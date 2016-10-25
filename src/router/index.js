/*
* @Author: Vincent1993
* @Date:   2016-09-24 11:09:15
* @Last Modified by:   Vincent1993
* @Last Modified time: 2016-09-26 15:30:19
*/

import Vue from 'vue';
import Router from 'vue-router';
import Index from 'views/IndexPage';
import TopicList from 'views/TopicList';
import Topic from 'views/Topic';
import Node from 'views/Node';
import User from 'views/User';
import Login from 'views/Login';

Vue.use(Router);
const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: Index,
            redirect: '/list?key=latest'
        },
        {
            path: '/list',
            name: 'list',
            component: TopicList
        },
        {
            path: '/topic',
            name: 'topic',
            component: Topic,
            meta: {
                goTop: true,
                title: '主题内容'
            }
        },
        {
            path: '/node',
            name: 'nodelist',
            component: Node,
            meta: {
                goTop: true,
                title: '节点列表'
            }
        },
        {
            path: '/user/:username/',
            name: 'user',
            component: User,
            meta: {
                goTop: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: '登录'
            }
        }

    ]
});
router.beforeEach((route, redirect, next) => {
    if (route.matched.some(record => record.meta.goTop)) {
        window.scroll(0, 0);
        next();
    } else {
        next();
    }
});
export default router;
