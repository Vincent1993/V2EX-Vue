/*
* @Author: Vincent1993
* @Date:   2016-09-18 14:04:23
* @Last Modified by:   Vincent1993
* @Last Modified time: 2016-09-19 10:09:35
*/

const plugins = [];

if (process.env.NODE_ENV !== 'production') {
    const createLogger = require('vuex/dist/logger');

    plugins.push(createLogger({
        collapsed: false
    }));
}

export default plugins;
