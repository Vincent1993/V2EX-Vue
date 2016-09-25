import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAIL,
    GET_USER_POST_TOPICS_REQUEST,
    GET_USER_POST_TOPICS_SUCCESS,
    GET_USER_POST_TOPICS_FAIL
} from 'actions';

const state = {
    userList: {
        items: {},
        isLoading: false
    },
    userPostList: {
        items: {},
        isLoading: false
    }
};

const insertDataToUser = (data, type, username) => {
    state[`user${type}List`] = {
        items: {
            ...state[`user${type}List`].items,
            [username]: data
        },
        isLoading: false
    };
};

const mutations = {
    [GET_USER_INFO_REQUEST](state) {
        state.userList = {
            ...state.userList,
            isLoading: true
        };
    },
    [GET_USER_INFO_SUCCESS](state, payload) {
        const { responseData, requestOptions } = payload;
        insertDataToUser(responseData, '', requestOptions.addition);
    },
    [GET_USER_INFO_FAIL](state) {
        return state.userList;
    },
    [GET_USER_POST_TOPICS_REQUEST](state) {
        state.userPostList = {
            ...state.userPostList,
            isLoading: true
        };
    },
    [GET_USER_POST_TOPICS_SUCCESS](state, payload) {
        const { responseData, requestOptions } = payload;
        insertDataToUser(responseData, 'Post', requestOptions.addition);
    },
    [GET_USER_POST_TOPICS_FAIL](state) {
        return state.userPostList;
    }
};

export default {
    state,
    mutations
};
