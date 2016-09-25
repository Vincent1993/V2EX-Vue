import utils from './utils';
/**
 * 格式化时间
 *  @param {string} time 需要格式化的时间
 *  @param {bool} fromnow 是否用多少分钟前
 */
export const getLastTimeStr = (time, fromnow) => {
    const UnixTimeStamp = new Date(time * 1000);
    if (fromnow) {
        return utils.MillisecondToDate(new Date() - new Date(UnixTimeStamp));
    } else {
        return utils.fmtDate(new Date(UnixTimeStamp), 'yyyy-MM-dd hh:mm');
    }
};
