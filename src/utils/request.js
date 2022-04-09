import axios from 'axios';
import { Toast } from 'vant';

const { VUE_APP_API_URL, NODE_ENV } = process.env;

// create an axios instance
const service = axios.create({
	baseURL: NODE_ENV === 'development' ? '/' : VUE_APP_API_URL, // url = base url + request url
	// withCredentials: true, // send cookies when cross-domain requests
	timeout: 20000, // request timeout
});

// request interceptor
service.interceptors.request.use(
	(config) => {
		// do something before request is sent

		return config;
	},
	(error) => {
		// do something with request error
		console.log(error); // for debug
		return Promise.reject(error);
	},
);

// response interceptor
service.interceptors.response.use(
	/**
	 * If you want to get http information such as headers or status
	 * Please return  response => response
	 */

	/**
	 * Determine the request status by custom code
	 * Here is just an example
	 * You can also judge the status by HTTP Status Code
	 */
	(response) => {
		const res = response.data;

		// if the custom code is not 200, it is judged as an error.
		if (res.code !== 0) {
			Toast.fail(res.msg || '请求错误');
		}
		return Promise.resolve(res);
	},
	(error) => {
		Toast.fail('请求错误');
		return Promise.reject(error);
	},
);

export default service;
