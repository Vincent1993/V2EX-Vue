/*
* @Author: Vincent1993
* @Date:   2016-09-18 14:19:41
* @Last Modified by:   Vincent1993
* @Last Modified time: 2016-09-26 10:58:44
*/
import {
    GET_LIST_BY_TAG_REQUEST,
    GET_LIST_BY_TAG_SUCCESS,
    GET_LIST_BY_TAG_FAIL
} from 'actions';
const state = {
    /** @type {Object} 主题列表 */
    topicList: {
        items: {},
        isLoading: false
    }
};

const insertDataToList = (data, tag) => {
    state.topicList = {
        ...state.topicList = {
            items: {
                ...state.topicList.items,
                [tag]: [...data]
            },
            fetchedTime: Date.now()
        },
        isLoading: false
    };
};
const mutations = {
    [GET_LIST_BY_TAG_REQUEST](state) {
        state.topicList = {
            ...state.topicList,
            isLoading: true
        };
    },
    [GET_LIST_BY_TAG_SUCCESS](state, payload) {
        const { responseData, requestOptions } = payload;
        insertDataToList(responseData, requestOptions.addition);
    },
    [GET_LIST_BY_TAG_FAIL](state) {
        state.topicList = {
            ...state.topicList,
            isLoading: false
        };
    }
};

export default {
    state,
    mutations
};
