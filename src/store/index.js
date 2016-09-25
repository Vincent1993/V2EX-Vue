/*
* @Author: Vincent1993
* @Date:   2016-09-18 13:58:12
* @Last Modified by:   Vincent1993
* @Last Modified time: 2016-09-24 17:01:01
*/

import Vue from 'vue';
import Vuex from 'vuex';
import plugins from './plugins';
// modules
import list from 'modules/list';
import topics from 'modules/topics';

import * as actions from 'actions';
import * as getters from 'getters';
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
    actions,
    getters,
    modules: {
        list,
        topics
    },
    strict: debug,
    plugins
});
