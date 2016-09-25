import { parse } from 'url';

/**
 * 检测url是否跨域
 * @param  {String}  requestUrl    需检测的url
 * @param  {String}  currentLocation 需检测的当前网址，如果留空，用location.href取代
 * @return {Boolean}               是否跨域
 */
const isCrossOrigin = (requestUrl, currentLocation) => {
    if (typeof requestUrl !== 'string') {
        throw new Error('Request url must be a string');
    }

    if (!currentLocation && typeof window !== 'undefined' && window.location) {
        currentLocation = window.location.href;
    }

    if (typeof currentLocation !== 'string') {
        throw new Error('Current location must be a string');
    }

    let parsedRequestUrl = parse(requestUrl),
        parsedCurrentLocation = parse(currentLocation);


    return parsedRequestUrl.protocol !== parsedCurrentLocation.protocol ||
        parsedRequestUrl.host !== parsedCurrentLocation.host;
};

export default isCrossOrigin;
