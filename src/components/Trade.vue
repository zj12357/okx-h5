<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="trade-container">
		<van-popup
			v-model:show="showTrade"
			position="bottom"
			closeable
			:style="{ height: '70%' }"
		>
			<div class="trade-popup-box">
				<h2 class="trade-title">下单</h2>
				<div class="trade-main">
					<div class="trade-tabs">
						<van-button
							:color="
								activeTrade == 'in' ? ' #e35e5e' : '#2e2e2e'
							"
							style="width: 168px; height: 36px"
							@click="changeTab('in')"
							>买入</van-button
						>
						<van-button
							:color="
								activeTrade == 'out' ? ' #2ead65' : '#2e2e2e'
							"
							style="width: 168px; height: 36px"
							@click="changeTab('out')"
							>卖出</van-button
						>
					</div>
					<div class="trade-form">
						<div class="trade-form-item">
							<div class="form-label">价格</div>
							<input
								class="form-input"
								type="number"
								v-model="price"
							/>
						</div>
						<div class="trade-form-item">
							<div class="form-label">数量</div>
							<input
								class="form-input"
								type="number"
								v-model="count"
							/>
						</div>
						<div class="trade-form-item">
							<div class="form-label">金额</div>
							<input
								class="form-input"
								type="number"
								v-model="amout"
							/>
						</div>
						<div style="margin: 26px 0px">
							<van-button
								block
								:color="
									activeTrade == 'in' ? ' #e35e5e' : '#2ead65'
								"
								native-type="submit"
								style="height: 36px;border-radius: 4px"
								@click="onSubmit"
							>
								{{ activeTrade == 'in' ? '买入' : '卖出' }}
							</van-button>
						</div>
					</div>
				</div>
			</div>
		</van-popup>

		<div class="trade-bottom-toggle">
			<van-button
				color="#e35e5e"
				style="width: 163px; height: 40px"
				@click="showPopup('in')"
				>买入</van-button
			>
			<van-button
				color="#2ead65"
				style="width: 163px; height: 40px"
				@click="showPopup('out')"
				>卖出</van-button
			>
		</div>
	</div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
export default {
	setup() {
		const showTrade = ref(false);
		const activeTrade = ref('in');
		const showPopup = (type) => {
			showTrade.value = true;
			activeTrade.value = type;
		};

		const changeTab = (type) => {
			activeTrade.value = type;
		};

		const ruleForm = reactive({
			price: '',
			count: '',
			amount: '',
		});

		const onSubmit = () => {
			console.log('submit', ruleForm);
		};
		return {
			showTrade,
			showPopup,
			activeTrade,
			changeTab,
			onSubmit,
			...toRefs(ruleForm),
		};
	},
};
</script>

<style lang="scss" scoped>
.trade-container {
	width: 100%;
	.trade-popup-box {
		width: 100%;
		height: 100%;
		.trade-title {
			font-size: 20px;
			color: #fff;
			padding: 18px 15px 6px;
			border-bottom: 1px solid #2e2e2e;
		}
		.trade-main {
			width: 100%;
			height: calc(100% - 45px);
			padding: 15px;
			background: #121212;
			.trade-tabs {
				width: 100%;
				padding: 1px;
				background: #2e2e2e;
				border-radius: 4px;
				@include flexCenter();
			}
			.trade-form {
				width: 100%;
				.trade-form-item {
					width: 100%;
					@include flexColumnStart1();
					margin-top: 16px;
					.form-label {
						color: #f0f0f0;
						font-size: 14px;
						margin-bottom: 4px;
					}
					.form-input {
						background: transparent;
						border: none;
						color: #fff;
						flex-grow: 1;
						height: 100%;
						outline: 1px solid #404040;
						width: 100%;
						height: 38px;
						padding: 0 10px;
						box-sizing: border-box;
						border-radius: 4px;
					}
				}
			}
		}
	}

	.trade-bottom-toggle {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 99;
		width: 100%;
		height: 72px;
		padding: 0 16px;
		@include flexBetweenCenter();
		background: #242424;
	}
	::v-deep {
		.van-popup {
			background: #242424;
		}
	}
}
</style>
