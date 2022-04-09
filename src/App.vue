<template>
	<Header v-if="['/login', '/', '/register'].includes($route.path)"></Header>
	<router-view />
	<Footer  v-if="$route.meta.footShow"></Footer>
</template>
<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { onMounted } from 'vue';
export default {
	components: {
		Header,
		Footer,
	},
	setup() {
		const isMobile = () => {
			if (
				window.navigator.userAgent.match(
					/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
				)
			) {
				return true; // 移动端
			} else {
				return false; // PC端
			}
		};

		const toPlatform = () => {
			if (!isMobile()) {
				window.location.href = './';
			}
		};
		onMounted(() => {
			if (process.env.NODE_ENV !== 'development') {
				toPlatform();
			}
		});
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	width: 100%;
	height: 100%;
}
</style>
