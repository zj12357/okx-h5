import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () =>
			import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
		meta: {
			footShow: false,
			requiresAuth: false,
		},
	},
	{
		path: '/login',
		name: 'Login',
		component: () =>
			import(/* webpackChunkName: "Login" */ '../views/Login/index.vue'),
		meta: {
			footShow: true,
			requiresAuth: false,
		},
	},
	{
		path: '/register',
		name: 'Register',
		component: () =>
			import(
				/* webpackChunkName: "Register" */ '../views/Register/index.vue'
			),
		meta: {
			footShow: true,
			requiresAuth: false,
		},
	},
	{
		path: '/termsofService',
		name: 'TermsofService',
		component: () =>
			import(
				/* webpackChunkName: "TermsofService" */ '../views/Agreement/TermsofService.vue'
			),
		meta: {
			footShow: true,
			requiresAuth: false,
		},
	},
	{
		path: '/privacyPolicy',
		name: 'PrivacyPolicy',
		component: () =>
			import(
				/* webpackChunkName: "PrivacyPolicy" */ '../views/Agreement/PrivacyPolicy.vue'
			),
		meta: {
			footShow: true,
			requiresAuth: false,
		},
	},
	{
		path: '/about',
		name: 'About',
		component: () =>
			import(
				/* webpackChunkName: "About" */ '../views/Agreement/About.vue'
			),
		meta: {
			footShow: true,
			requiresAuth: false,
		},
	},
	{
		path: '/amountRecord',
		name: 'AmountRecord',
		component: () =>
			import(
				/* webpackChunkName: "AmountRecord" */ '../views/UserCenter/AmountRecord/index.vue'
			),
		meta: {
			footShow: true,
			requiresAuth: true,
		},
	},
	{
		path: '/recharge',
		name: 'Recharge',
		component: () =>
			import(
				/* webpackChunkName: "Recharge" */ '../views/UserCenter/Recharge/index.vue'
			),
		meta: {
			footShow: true,
			requiresAuth: true,
		},
	},
	{
		path: '/tradeRecord',
		name: 'TradeRecord',
		component: () =>
			import(
				/* webpackChunkName: "TradeRecord" */ '../views/UserCenter/TradeRecord/index.vue'
			),
		meta: {
			footShow: true,
			requiresAuth: true,
		},
	},
	{
		path: '/wallet',
		name: 'Wallet',
		component: () =>
			import(
				/* webpackChunkName: "Wallet" */ '../views/UserCenter/Wallet/index.vue'
			),
		meta: {
			footShow: true,
			requiresAuth: true,
		},
	},
	{
		path: '/withdraw',
		name: 'Withdraw',
		component: () =>
			import(
				/* webpackChunkName: "Withdraw" */ '../views/UserCenter/Withdraw/index.vue'
			),
		meta: {
			footShow: true,
			requiresAuth: true,
		},
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
