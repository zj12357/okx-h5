import { createStore } from 'vuex';
const { VUE_APP_TITLE } = process.env;

export default createStore({
	state: {
		token: localStorage.getItem('token') || null,
		webTitle: VUE_APP_TITLE,
	},
	mutations: {
		setToken(state, data) {
			state.token = data;
			localStorage.setItem('token', data);
		},
		removeToken(state) {
			state.token = null;
			localStorage.removeItem('token');
		},
	},
	actions: {
		setToken({ commit }, data) {
			commit('setToken', data);
		},
		removeToken({ commit }) {
			commit('removeToken');
		},
	},
	getters: {
		getToken(state) {
			return !!state.token;
		},
	},
});
