import generateRequestAction from 'utils/generateRequestAction';
import { API } from 'config';

export const GET_TOPIC_CONTENT_REQUEST = 'GET_TOPIC_CONTENT_REQUEST';
export const GET_TOPIC_CONTENT_SUCCESS = 'GET_TOPIC_CONTENT_SUCCESS';
export const GET_TOPIC_CONTENT_FAIL = 'GET_TOPIC_CONTENT_FAIL';
/** 获取问题ID获取内容 */
export const getTopicContentById = ({ commit, state }, topicId) => {
    const request = generateRequestAction({
        actionTypes: [
            GET_TOPIC_CONTENT_REQUEST,
            GET_TOPIC_CONTENT_SUCCESS,
            GET_TOPIC_CONTENT_FAIL
        ],
        requestOptions: {
            url: `${API}/topics/show.json?id=${topicId}`,
            addition: topicId
        }
    });

    return request({ commit });
};

export const GET_TOPIC_REPLY_REQUEST = 'GET_TOPIC_REPLY_REQUEST';
export const GET_TOPIC_REPLY_SUCCESS = 'GET_TOPIC_REPLY_SUCCESS';
export const GET_TOPIC_REPLY_FAIL = 'GET_TOPIC_REPLY_FAIL';
/** 根据问题ID获回复 */
export const getTopicReplyById = ({ commit, state }, topicId) => {
    const request = generateRequestAction({
        actionTypes: [
            GET_TOPIC_REPLY_REQUEST,
            GET_TOPIC_REPLY_SUCCESS,
            GET_TOPIC_REPLY_FAIL
        ],
        requestOptions: {
            url: `${API}/replies/show.json?topic_id=${topicId}`,
            addition: topicId
        }
    });

    return request({ commit });
};

/** 获取主题内容 如果缓存中存在则不重复获取 */
export const getTopicContentInfoIfNeed = ({ commit, state }, topicId) => {
    const isLoading = state.topics.contentList.isLoading;

    if (isLoading) {
        return;
    }

    const cacheTopicContent = state.topics.contentList.items[topicId];

    if (!cacheTopicContent) {
        return getTopicContentById({ commit }, topicId);
    }

    return cacheTopicContent;
};

/** 获取主题回复列表 如果缓存中存在则不重复获取 */
export const getTopicReplyInfoIfNeed = ({ commit, state }, topicId) => {
    const isLoading = state.topics.replyList.isLoading;

    if (isLoading) {
        return;
    }

    const cacheTopicReply = state.topics.replyList.items[topicId];

    if (!cacheTopicReply) {
        return getTopicReplyById({ commit }, topicId);
    }

    return cacheTopicReply;
};
