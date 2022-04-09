<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<van-nav-bar
		title="关于我们"
		left-text="返回"
		left-arrow
		@click-left="$router.back()"
		fixed
	/>
	<div class="about-container">
		<div class="about-main">
			{{$store.state.webTitle}}是全球著名的基金投资交易平台之一，主要面向全球基金,股票投资服务。
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.about-container {
	width: 100%;
	@include flexColumnStart();
	background-color: #fff;
	padding: 46px 20px 0;
	min-height: calc(100% - 50px);
	.about-main {
		color: #3f475a;
		font-size: 20px;
		margin-top: 30px;
		text-indent: 2em;
		line-height: 25px;
	}
}
</style>
