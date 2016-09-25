/*
* @Author: Vincent1993
* @Date:   2016-09-24 16:53:20
* @Last Modified by:   Vincent1993
* @Last Modified time: 2016-09-25 21:33:14
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

const insertDataToList = (data, type, topicId) => {
    state[`${type}List`] = {
        ...state[`${type}List`],
        items: {
            [topicId]: data
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
        const { responseData, requestOptions } = payload;
        insertDataToList(responseData, 'content', requestOptions.addition);
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
        const { responseData, requestOptions } = payload;
        insertDataToList(responseData, 'reply', requestOptions.addition);
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
