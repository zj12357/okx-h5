<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="login-container">
		<h1 class="login-title">欢迎来到{{$store.state.webTitle}}</h1>
		<van-form @submit="onSubmit">
			<van-cell-group inset>
				<van-field
					v-model="username"
					name="用户名"
					label="用户名"
					placeholder="用户名"
					:rules="[{ required: true, message: '请填写用户名' }]"
				/>
				<van-field
					v-model="password"
					type="password"
					name="密码"
					label="密码"
					placeholder="密码"
					:rules="[{ required: true, message: '请填写密码' }]"
				/>
			</van-cell-group>
			<div style="margin: 30px 0">
				<van-button
					block
					color="#000"
					native-type="submit"
					style="border-radius: 4px; height: 48px"
				>
					登录
				</van-button>
				<p class="login-guide">
					还没有账户？
					<router-link to="/register">立即注册</router-link>
				</p>
			</div>
		</van-form>
	</div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { Toast } from 'vant';
import {useStore} from "vuex"
export default {
	setup() {
		const router = useRouter();
		const store = useStore()
		const ruleForm = reactive({
			username: '',
			password: '',
		});
		const onSubmit = (value) => {
			console.log('submit', value);
			Toast.success('登录成功');
			store.dispatch('setToken','aaaaaaaaaa')
			router.push('/');
		};
		return {
			...toRefs(ruleForm),
			onSubmit,
		};
	},
};
</script>

<style lang="scss" scoped>
.login-container {
	width: 100%;
	min-height: calc(100% - 92px);
	background: #fff;
	padding: 20px;
	.login-title {
		font-size: 24px;
		font-weight: bold;
		margin-top: 30px;
		margin-bottom: 40px;
	}
	.login-guide {
		@include flexCenter();
		margin-top: 20px;
		color: #3d3d3d;
		font-size: 14px;
		a {
			color: #004cff;
		}
	}
	::v-deep {
		.van-cell-group {
			padding: 0;
			margin: 0;
			.van-field {
				flex-direction: column;
				padding: 10px 4px;
				.van-field__label {
					color: #000;
					margin-bottom: 4px;
				}
				.van-field__value {
					input {
						background: transparent;
						border: none;
						color: #000;
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
}
</style>
