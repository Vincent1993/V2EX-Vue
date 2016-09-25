import reqwest from '../vendor/reqwest';
import isCrossOrigin from './isCrossOrigin';

/**
 * 获取网络请求的Promise
 * @param  {Object} params        请求参数
 * @param  {Boolean} ignoreFailure 打开则强制resolve
 * @return {Promise}
 */
const getRequestPromise = (params) => {
    const defaultParams = {
        method: 'get',
        type: 'json'
    };

    if (!params.url) {
        throw new Error('Empty url');
    }

    const config = {
        ...defaultParams,
        ...params
    };

    return new Promise((resolve, reject) => {
        // debugger
        reqwest({
            ...config,
            // ...params,
            // 是否跨域
            crossOrigin: isCrossOrigin(params.url),
            success(res) {
                resolve(res);
            },
            error(err) {
                reject(err);
            }
        });
    });
};

export default getRequestPromise;
