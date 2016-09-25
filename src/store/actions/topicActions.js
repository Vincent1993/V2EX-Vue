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
            url: `${API}/topics/show.json?id=${topicId}`
        },
        additionData: topicId
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
            data: topicId
        },
        additionData: topicId
    });

    return request({ commit });
};
