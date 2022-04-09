<template>
	<van-nav-bar
		title="充值"
		left-text="返回"
		left-arrow
		@click-left="$router.back()"
		fixed
	/>
	<div class="recharge-container">
		<van-form @submit="onSubmit" class="recharge-form" v-if="!isRecharge">
			<van-cell-group inset>
				<van-field
					v-model="amount"
					name="amount"
					label="金额"
					placeholder="请输入金额"
					:rules="[{ required: true, message: '请输入金额' }]"
				/>
				<van-field
					v-model="password"
					name="password"
					label="提现密码"
					placeholder="请输入提现密码"
					:rules="[{ required: true, message: '请输入提现密码' }]"
				/>
			</van-cell-group>
			<div class="recharge-btn">
				<van-button round block type="primary" native-type="submit" color="#000">
					提交
				</van-button>
			</div>
		</van-form>
		<Success
			v-else
			text="提交成功"
			des="提交成功，请联系客服查询"
		></Success>
	</div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue';
import Success from '../../../components/Success.vue';
export default {
	components: {
		Success,
	},
	setup() {
		const data = reactive({
			amount: '',
			password: '',
		});
		const isRecharge = ref(false);
		const onSubmit = (values) => {
			console.log('submit', values);
			isRecharge.value = true;
		};
		return {
			...toRefs(data),
			isRecharge,
			onSubmit,
		};
	},
};
</script>

<style lang="scss" scoped>
.recharge-container {
	width: 100%;
	background-color: #fff;
	padding: 46px 20px 0;
	min-height: calc(100% - 50px);
	.recharge-form {
		padding-top: 30px;
		.recharge-btn {
			margin-top: 20px;
		}
	}
}
</style>
