/*
* @Author: Vincent1993
* @Date:   2016-09-26 10:27:42
* @Last Modified by:   Vincent1993
* @Last Modified time: 2016-09-26 10:29:01
*/
export const SHOW_LOADING = 'SHOW_LOADING';
export const showLoading = ({ commit }) => {
    commit(SHOW_LOADING);
};
export const HIDE_LOADING = 'HIDE_LOADING';
export const hideLoading = ({ commit }) => {
    commit(HIDE_LOADING);
};
