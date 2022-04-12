<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="register-container">
		<h1 class="register-title">欢迎来到{{$store.state.webTitle}}</h1>
		<van-form @submit="onSubmit">
			<van-cell-group inset>
				<van-field
					v-model="name"
					name="用户名"
					label="用户名"
					placeholder="请填写用户名"
					:rules="[
						{
							required: true,
							message: '长度为6-12位数字或字母组成',
						},
					]"
					maxlength="12"
				/>
				<van-field
					v-model="password"
					type="password"
					name="密码"
					label="密码"
					placeholder="请填写密码"
					:rules="[
						{
							required: true,
							message: '长度为6-12位数字或字母组成',
						},
					]"
				/>
				<van-field
					v-model="comfirmPassword"
					type="password"
					name="comfirmPassword"
					label="确认密码"
					placeholder="请填写确认密码"
					:rules="[
						{
							required: true,
							message: '长度为6-12位数字或字母组成',
						},
					]"
				/>
				<van-field
					v-model="invitationCode"
					name="邀请码(选填)"
					label="邀请码(选填)"
					placeholder="邀请码(选填)"
				/>
			</van-cell-group>
			<div style="margin: 30px 0">
				<p class="register-declare">
					注册账号即代表您同意了{{$store.state.webTitle}}的
					<router-link to="/termsofService">服务条款</router-link> 和
					<router-link to="/privacyPolicy"
						>隐私政策与声明</router-link
					>
				</p>
				<van-button
					block
					color="#000"
					native-type="submit"
					style="border-radius: 4px; height: 48px"
				>
					登录
				</van-button>
				<p class="register-guide">
					已有账户？
					<router-link to="/login">登录</router-link>
				</p>
			</div>
		</van-form>
	</div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
	setup() {
		const ruleForm = reactive({
			name: '',
			password: '',
			comfirmPassword:'',
			invitationCode: '',
		});
		const onSubmit = (value) => {
			console.log('submit', value);
		};
		return {
			...toRefs(ruleForm),
			onSubmit,
		};
	},
};
</script>

<style lang="scss" scoped>
.register-container {
	width: 100%;
	min-height: calc(100% - 92px);
	background: #fff;
	padding: 20px;
	.register-title {
		font-size: 24px;
		font-weight: bold;
		margin-top: 30px;
		margin-bottom: 40px;
	}
	.register-guide {
		@include flexCenter();
		margin-top: 20px;
		color: #3d3d3d;
		font-size: 14px;
		a {
			color: #004cff;
		}
	}
	.register-declare {
		font-size: 12px;
		line-height: 16px;
		margin-bottom: 4px;
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
