import generateRequestAction from 'utils/generateRequestAction';
import { API } from 'config';

export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAIL = 'GET_USER_INFO_FAIL';
/** 根据用户名获取用户信息 */
export const getUserInfoByUsername = ({ commit, state }, username) => {
    const request = generateRequestAction({
        actionTypes: [
            GET_USER_INFO_REQUEST,
            GET_USER_INFO_SUCCESS,
            GET_USER_INFO_FAIL
        ],
        requestOptions: {
            url: `${API}/members/show.json?username=${username}`,
            addition: username
        }
    });

    return request({ commit });
};

export const GET_USER_POST_TOPICS_REQUEST = 'GET_USER_POST_TOPICS_REQUEST';
export const GET_USER_POST_TOPICS_SUCCESS = 'GET_USER_POST_TOPICS_SUCCESS';
export const GET_USER_POST_TOPICS_FAIL = 'GET_USER_POST_TOPICS_FAIL';
/** 获取所有用户发表的主题 */
export const getTopicByUserPost = ({ commit, state }, username) => {
    const request = generateRequestAction({
        actionTypes: [
            GET_USER_POST_TOPICS_REQUEST,
            GET_USER_POST_TOPICS_SUCCESS,
            GET_USER_POST_TOPICS_FAIL
        ],
        requestOptions: {
            url: `${API}/topics/show.json?username=${username}`,
            addition: username
        }
    });
    return request({ commit });
};
/** 获取用户信息 如果缓存中存在则不重复获取 */
export const getUserInfoIfNeed = ({ commit, state }, username) => {
    const isLoading = state.users.userList.isLoading;

    if (isLoading) {
        return;
    }

    const cacheUserInfo = state.users.userList.items[username];

    if (!cacheUserInfo) {
        return getUserInfoByUsername({ commit }, username);
    }

    return cacheUserInfo;
};

/** 获取用户提交的问题 如果缓存中存在则不重复获取 */
export const getUserPostInfoIfNeed = ({ commit, state }, username) => {
    const isLoading = state.users.userPostList.isLoading;

    if (isLoading) {
        return;
    }

    const cacheUserPostList = state.users.userPostList.items[username];

    if (!cacheUserPostList) {
        return getTopicByUserPost({ commit }, username);
    }

    return cacheUserPostList;
};
