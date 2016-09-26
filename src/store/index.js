/*
* @Author: Vincent1993
* @Date:   2016-09-18 13:58:12
* @Last Modified by:   Vincent1993
* @Last Modified time: 2016-09-26 10:32:25
*/

import Vue from 'vue';
import Vuex from 'vuex';
import plugins from './plugins';
// modules
import list from 'modules/list';
import topics from 'modules/topics';
import users from 'modules/users';
import common from 'modules/common';

import * as actions from 'actions';
import * as getters from 'getters';
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
    actions,
    getters,
    modules: {
        list,
        topics,
        users,
        common
    },
    strict: debug,
    plugins
});
