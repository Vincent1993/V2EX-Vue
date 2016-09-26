/*
* @Author: Vincent1993
* @Date:   2016-09-26 10:31:01
* @Last Modified by:   Vincent1993
* @Last Modified time: 2016-09-26 10:32:12
*/
import {
    SHOW_LOADING,
    HIDE_LOADING
} from 'actions';
const state = {
    showLoading: false
};

const mutations = {
    [SHOW_LOADING](state) {
        state.showLoading = true;
    },
    [HIDE_LOADING](state) {
        state.showLoading = false;
    }
};

export default {
    state,
    mutations
};
