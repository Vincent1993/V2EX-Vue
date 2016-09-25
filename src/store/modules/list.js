/*
* @Author: Vincent1993
* @Date:   2016-09-18 14:19:41
* @Last Modified by:   Vincent1993
* @Last Modified time: 2016-09-25 16:17:11
*/
import {
    GET_HOT_LIST_REQUEST,
    GET_HOT_LIST_SUCCESS,
    GET_HOT_LIST_FAIL
} from 'actions';
const state = {
    /** @type {Object} 热门列表 */
    hotList: {
        items: [],
        isLoading: false
    },
    /** @type {Object} 最新列表 */
    newList: {
        items: [],
        isLoading: false
    },
    /** @type {Object} 某节点列表 */
    nodeList: {
        items: [],
        isLoading: false
    }
};

const insertDataToList = (type, data) => {
    if (!type) {
        return state;
    }

    state[type] = {
        ...state[type] = {
            items: [...data],
            fetchedTime: Date.now()
        },
        isLoading: false
    };
};
const mutations = {
    [GET_HOT_LIST_REQUEST](state) {
        state.hotList = {
            ...state.hotList,
            isLoading: true
        };
    },
    [GET_HOT_LIST_SUCCESS](state, payload) {
        insertDataToList('hotList', payload.responseData);
    },
    [GET_HOT_LIST_FAIL](state) {
        state.hotList = {
            ...state.hotList,
            isLoading: false
        };
    }
};

export default {
    state,
    mutations
};
