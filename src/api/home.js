/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import request from '../utils/request';

//提交申请
export const CreateApply = (param) =>
	request.post('/api/ApplyActivity/CreateApply', param);

//查询流水
export const GetUserBets = (param) =>
	request.post('/api/ApplyActivity/GetUserBets', param);

//下载APP
export const GetAppDownLoadByplatform = (param) =>
	request.post('/api/app/GetAppDownLoadByplatform', param);

