<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="okx-home">
		<Trend></Trend>
		<Trade></Trade>
	</div>
</template>

<script>
import Trend from './Trend';
import Trade from '../components/Trade.vue';

export default {
	components: {
		Trend,
		Trade,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.okx-home {
	width: 100%;
	@include flexColumnStart();
}
</style>
