<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="success-container">
		<img src="../assets/images/status/color-success.png" alt="" />
		<span>{{ text }}</span>
		<van-button type="primary" size="small">{{ des }}</van-button>
	</div>
</template>

<script>
export default {
	props: {
		text: String,
		des: String,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.success-container {
	width: 100%;
	height: 300px;
	@include flexColumnStart();
    padding-top: 20px;
	img {
		width: 50px;
	}
	span {
		font-size: 20px;
		margin: 15px 0;
		color: #1f2533;
		font-weight: bold;
	}
}
</style>
