/*
* @Author: Vincent1993
* @Date:   2016-09-18 14:19:41
* @Last Modified by:   Vincent1993
* @Last Modified time: 2016-09-26 15:27:50
*/
import {
    GET_LIST_BY_TAG_REQUEST,
    GET_LIST_BY_TAG_SUCCESS,
    GET_LIST_BY_TAG_FAIL,
    GET_ALL_NODE_LIST_REQUEST,
    GET_ALL_NODE_LIST_SUCCESS,
    GET_ALL_NODE_LIST_FAIL
} from 'actions';
const state = {
    /** @type {Object} 主题列表 */
    topicList: {
        items: {},
        isLoading: false
    },
    /** @type {Object} 节点列表 */
    nodeList: {
        items: [],
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
    },
    [GET_ALL_NODE_LIST_REQUEST](state) {
        state.nodeList = {
            ...state.nodeList,
            isLoading: true
        };
    },
    [GET_ALL_NODE_LIST_SUCCESS](state, payload) {
        const { responseData } = payload;
        state.nodeList = {
            items: [...responseData],
            isLoading: false
        };
    },
    [GET_ALL_NODE_LIST_FAIL](state) {
        state.nodeList = {
            ...state.nodeList,
            isLoading: false
        };
    }
};

export default {
    state,
    mutations
};
