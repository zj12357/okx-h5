<template>
	<div class="card-container">
		<van-form @submit="onSubmit">
			<van-cell-group inset>
				<van-field
					v-model="username"
					name="username"
					label="姓名"
					placeholder="请输入姓名"
					:rules="[{ required: true, message: '请输入姓名' }]"
				/>
				<van-field
					v-model="bankNumber"
					name="bankNumber"
					label="银行卡号"
					placeholder="请输入银行卡号"
					:rules="[{ required: true, message: '请输入银行卡号' }]"
				/>
				<van-field
					v-model="password"
					type="password"
					name="password"
					label="密码"
					placeholder="请输入提现密码"
					:rules="[{ required: true, message: '请输入提现密码' }]"
				/>
				<van-field
					v-model="confirmPassword"
					type="confirmPassword"
					name="confirmPassword"
					label="确认密码"
					placeholder="请再次输入提现密码"
					:rules="[{ required: true, message: '请再次输入提现密码' }]"
				/>
			</van-cell-group>
			<div style="margin: 16px">
				<van-button round block type="primary" native-type="submit" color="#000">
					提交
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
	setup() {
		const data = reactive({
			username: '',
			bankNumber: '',
			password: '',
			confirmPassword: '',
		});
		const onSubmit = (values) => {
			console.log('submit', values);
		};

		return {
			...toRefs(data),
			onSubmit
		};
	},
};
</script>

<style lang="scss" scoped>
.card-container {
	width: 100%;
	background-color: #fff;
	padding-top: 30px;
}
</style>
