<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="footer-container">
		<div class="footer-nav">
			<router-link to="/about">关于我们</router-link>
			<span @click="copyText">邀请好友</span>
		</div>
	</div>
</template>

<script>
import copy from 'copy-to-clipboard';
import { Toast } from 'vant';
export default {
	setup() {
		const copyText = () => {
			Toast.success('复制成功，快去粘贴给好友吧！');
			copy(window.location.origin);
		};
		return { copyText };
	},
};
</script>

<style lang="scss" scoped>
.footer-container {
	width: 100%;
	@include flexEndCenter();
	height: 50px;
	background: #000;
	.footer-nav {
		@include flexBetweenCenter();
		a,
		span {
			font-size: 16px;
			color: #fafafa;
			font-weight: bold;
			display: block;
			margin: 0 20px;
			text-decoration: none;
		}
	}
}
</style>
