import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';
import getRequestPromise from './getRequestPromise';
import co from 'co';

const { wrap: async } = co;
/**
 * 生成标准的网络请求action
 * @param  {Object} options 选项
 * @return {function}       action
 */
const generateRequestAction = (options) => {
    let {
        /** @type {Array} 三个请求Type,request/success/fail */
        actionTypes = [],
        /** @type {Object} 请求参数 */
        requestOptions = {},
        /** @type {Function} 请求数据过滤器 */
        requestFilter,
        /** @type {Function} 响应数据过滤器 */
        responseFilter
    } = options;
    if (!isArray(actionTypes) || actionTypes.length !== 3) {
        throw new TypeError('actionTypes must be a array of three strings');
    }

    const [REQUEST_TYPE, SUCCESS_TYPE, FAIL_TYPE] = actionTypes;

    if (!requestOptions.url) {
        throw new Error('url must specified');
    }

    if (!isFunction(requestFilter)) {
        requestFilter = data => data;
    }

    if (!isFunction(responseFilter)) {
        responseFilter = (res, requestData) => {
            const newData = {
                ...res
            };

            return [newData];
        };
    }

    /**
     * 标准网络请求action
     * @param  {Object} store store
     * @param  {Object} requestData 请求参数
     * @param  {Object} additionData 其它数据
     * @return {Promise}
     */
    return async(function * ({ commit }, requestData = {}, additionData = {}) {
        try {
            commit(REQUEST_TYPE, requestData);

            const responseData = yield getRequestPromise({
                ...requestOptions,
                data: requestFilter(requestData)
            }, true);

            commit(SUCCESS_TYPE, { responseData, requestOptions });
            yield responseData;
        } catch (error) {
            commit(FAIL_TYPE, error, requestData, additionData);

            throw error;
        }
    });
};

export default generateRequestAction;
