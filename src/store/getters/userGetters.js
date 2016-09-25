/*
* @Author: Vincent1993
* @Date:   2016-09-25 15:06:58
* @Last Modified by:   Vincent1993
* @Last Modified time: 2016-09-25 16:35:19
*/
// 获取当前用户信息
export const userInfo = state => state.users.userList.items;
// 当前用户所有发布的主题
export const userPostList = state => state.users.userPostList.items;
