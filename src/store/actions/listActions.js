import generateRequestAction from 'utils/generateRequestAction';
import { API } from 'config';

export const GET_HOT_LIST_REQUEST = 'GET_HOT_LIST_REQUEST';
export const GET_HOT_LIST_SUCCESS = 'GET_HOT_LIST_SUCCESS';
export const GET_HOT_LIST_FAIL = 'GET_HOT_LIST_FAIL';
/** 获取热门列表 */
export const getHotList = generateRequestAction({
    actionTypes: [
        GET_HOT_LIST_REQUEST,
        GET_HOT_LIST_SUCCESS,
        GET_HOT_LIST_FAIL
    ],
    requestOptions: {
        url: `${API}/topics/hot.json`
    },
    responseFilter: (responseData, additionData, requestData) => {
        return [
            responseData
        ];
    }
});
