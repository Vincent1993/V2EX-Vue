import generateRequestAction from 'utils/generateRequestAction';
import { API } from 'config';

export const GET_LIST_BY_TAG_REQUEST = 'GET_LIST_BY_TAG_REQUEST';
export const GET_LIST_BY_TAG_SUCCESS = 'GET_LIST_BY_TAG_SUCCESS';
export const GET_LIST_BY_TAG_FAIL = 'GET_LIST_BY_TAG_FAIL';

/** 根据标签获取列表 */
export const getListByTag = ({ commit, state }, tag) => {
    const request = generateRequestAction({
        actionTypes: [
            GET_LIST_BY_TAG_REQUEST,
            GET_LIST_BY_TAG_SUCCESS,
            GET_LIST_BY_TAG_FAIL
        ],
        requestOptions: {
            url: `${API}/topics/${tag}.json`,
            addition: tag
        }
    });

    return request({ commit });
};

export const getListByTagIfNoCache = ({ commit, state }, tag) => {
    const isLoading = state.list.topicList.isLoading;

    if (isLoading) {
        return;
    }

    const cacheTagList = state.list.topicList.items[tag];

    if (!cacheTagList) {
        getListByTag({ commit }, tag);
    }

    return cacheTagList;
};
