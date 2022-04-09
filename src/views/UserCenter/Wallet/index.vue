<template>
	<van-nav-bar
		title="我的资产"
		left-text="返回"
		left-arrow
		@click-left="$router.back()"
		fixed
	/>
	<div class="wallet-container">
		<div class="wallet-title" @click="toggleShow">
			<span>总资产</span>
			<img
				v-if="isShowMoney"
				src="../../../assets/images/user/browse.png"
				alt=""
			/>
			<img
				v-if="!isShowMoney"
				src="../../../assets/images/user/hide.png"
				alt=""
			/>
		</div>
		<van-divider />
		<div class="wallet-main">
			<div class="money">
				<img src="../../../assets/images/user/money.png" alt="" />
				<span>{{ isShowMoney ? '1000.00' : '******' }}</span>
			</div>
			<div class="wallet-pay-btn">
				<van-button
					type="primary"
					block
					@click="$router.push('/recharge')"
					color="#000"
					>充值</van-button
				>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
	setup() {
		const data = reactive({
			isShowMoney: false,
		});
		const toggleShow = () => {
			data.isShowMoney = !data.isShowMoney;
		};
		return {
			...toRefs(data),
			toggleShow,
		};
	},
};
</script>

<style lang="scss" scoped>
.wallet-container {
	width: 100%;
	background-color: #fff;
	padding: 46px 20px 0;
	min-height: calc(100% - 50px);
	.wallet-title {
		width: 100%;
		@include flexStartCenter();
		padding-top: 20px;
		span {
			color: #1f2533;
			font-size: 18px;
			font-weight: bold;
		}
		img {
			width: 18px;
			margin-left: 6px;
			cursor: pointer;
		}
	}
	.wallet-main {
		width: 100%;
		@include flexColumnStart();
		.money {
			@include flexCenter();
			margin: 30px 0;
			img {
				width: 44px;
				height: auto;
				margin-right: 6px;
			}
			span {
				color: #1f2533;
				font-size: 38px;
				font-weight: bold;
			}
		}

		.wallet-pay-btn {
			width: 60%;
			margin-top: 20px;
		}
	}
}
</style>
