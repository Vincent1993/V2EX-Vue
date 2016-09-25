/*
* @Author: Vincent1993
* @Date:   2016-09-24 16:53:20
* @Last Modified by:   Vincent1993
* @Last Modified time: 2016-09-25 16:16:59
*/
import {
    GET_TOPIC_CONTENT_REQUEST,
    GET_TOPIC_CONTENT_SUCCESS,
    GET_TOPIC_CONTENT_FAIL,
    GET_TOPIC_REPLY_REQUEST,
    GET_TOPIC_REPLY_SUCCESS,
    GET_TOPIC_REPLY_FAIL
} from 'actions';

const state = {
    contentList: {
        items: {},
        isLoading: false
    },
    replyList: {
        items: {},
        isLoading: false
    }
};

const insertDataToList = (data, type) => {
    const { id } = data[0];
    state[`${type}List`] = {
        ...state[`${type}List`],
        items: {
            [id]: data
        },
        isLoading: false
    };
};

const mutations = {
    [GET_TOPIC_CONTENT_REQUEST](state) {
        state.contentList = {
            ...state.contentList,
            isLoading: true
        };
    },
    [GET_TOPIC_CONTENT_SUCCESS](state, payload) {
        insertDataToList(payload.responseData, 'content');
    },
    [GET_TOPIC_CONTENT_FAIL](state) {
        state.contentList = {
            ...state.contentList,
            isLoading: false
        };
    },
    [GET_TOPIC_REPLY_REQUEST](state) {
        state.replyList = {
            ...state.replyList,
            isLoading: true
        };
    },
    [GET_TOPIC_REPLY_SUCCESS](state, payload) {
        insertDataToList(payload.responseData, 'reply');
    },
    [GET_TOPIC_REPLY_FAIL](state) {
        state.replyList = {
            ...state.replyList,
            isLoading: false
        };
    }
};

export default {
    state,
    mutations
};
