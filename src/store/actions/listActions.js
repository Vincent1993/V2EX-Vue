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
/** 根据节点名称获取节点列表 */
export const getListByNodeName = ({ commit, state }, node) => {
    const request = generateRequestAction({
        actionTypes: [
            GET_LIST_BY_TAG_REQUEST,
            GET_LIST_BY_TAG_SUCCESS,
            GET_LIST_BY_TAG_FAIL
        ],
        requestOptions: {
            url: `${API}/topics/show.json?node_id=${node.node_id}`,
            addition: node.node_name
        }
    });

    return request({ commit });
};

export const getListByNodeIfNoCache = ({ commit, state }, node) => {
    const isLoading = state.list.topicList.isLoading;

    if (isLoading) {
        return;
    }

    const cacheTagList = state.list.topicList.items[node.node_name];

    if (!cacheTagList) {
        getListByNodeName({ commit }, node);
    }

    return cacheTagList;
};

export const GET_ALL_NODE_LIST_REQUEST = 'GET_ALL_NODE_LIST_REQUEST';
export const GET_ALL_NODE_LIST_SUCCESS = 'GET_ALL_NODE_LIST_SUCCESS';
export const GET_ALL_NODE_LIST_FAIL = 'GET_ALL_NODE_LIST_FAIL';
/**
 * 获取所有节点列表
 * return {Promise}
 */
export const getAllNodeList = generateRequestAction({
    actionTypes: [
        GET_ALL_NODE_LIST_REQUEST,
        GET_ALL_NODE_LIST_SUCCESS,
        GET_ALL_NODE_LIST_FAIL
    ],
    requestOptions: {
        url: `${API}/nodes/all.json`
    }
});
