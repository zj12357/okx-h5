/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import router from '../router';

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (!localStorage.getItem('token')) {
			next({
				path: '/login',
				query: { redirect: to.fullPath },
			});
		} else {
			if (to.path === '/login') {
				next({ path: '/' });
			} else {
				next();
			}
		}
	} else {
		if (to.path === '/login' && localStorage.getItem('token')) {
			next({ path: '/' });
		} else {
			next(); // 确保一定要调用 next()
		}
	}
});
