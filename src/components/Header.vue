<template>
	<div class="okx-header">
		<h1 class="okx-header-title" @click="toPage('/')">
			{{$store.state.webTitle}}
		</h1>
		<van-icon
			name="bars"
			color="#fff"
			size="8vw"
			@click="showPopup(true)"
		/>
		<van-popup
			v-model:show="show"
			position="right"
			:style="{ width: '100%', height: '100%' }"
			closeable
		>
			<div class="okx-header-btn">
				<div class="header-user-status" v-if="!token">
					<van-button
						@click="toPage('/login')"
						size="small"
						color="#242424"
						style="border: 1px solid #fff"
						>登录</van-button
					>
					<van-button
						@click="toPage('/register')"
						size="small"
						color="#242424"
						style="border: 1px solid #fff"
						>注册</van-button
					>
				</div>
				<div class="header-user-status" v-else>
					<van-image
						round
						width="16vw"
						height="16vw"
						src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
					/>
					<div class="name">
						<span>用户名</span>
						<span>full</span>
					</div>
					<van-button
						@click="loginOut"
						size="small"
						color="#242424"
						style="border: 1px solid #fff"
						>退出</van-button
					>
				</div>
			</div>
			<div class="okx-herder-nav">
				<div class="nav-item" @click="toPage('/wallet')">我的资金</div>
				<div class="nav-item" @click="toPage('/tradeRecord')">
					交易记录
				</div>
				<div class="nav-item" @click="toPage('/amountRecord')">
					资金记录
				</div>
				<div class="nav-item" @click="toPage('/recharge')">充值</div>
				<div class="nav-item" @click="toPage('/withdraw')">提现</div>
				<div class="nav-item down" @click="toggleDown">
					更多
					<van-icon :name="isDown ? 'arrow-up' : 'arrow-down'" />
				</div>
				<div
					class="down-content"
					v-if="isDown"
					@click="toPage('/about')"
				>
					关于我们
				</div>
			</div>
		</van-popup>
	</div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { Toast } from 'vant';
export default {
	setup() {
		const router = useRouter();
		const store = useStore();
		const show = ref(false);
		const isDown = ref(false);
		const showPopup = (value) => {
			show.value = value;
		};
		const token = computed(() => store.getters.getToken);

		const toggleDown = () => {
			isDown.value = !isDown.value;
		};

		const toPage = (path) => {
			router.push(path);
			showPopup(false);
		};
		const loginOut = () => {
			store.dispatch('removeToken').then(() => {
				Toast.success('退出成功！');
				show.value = false;
				router.push('/');
			});
		};
		return { show, showPopup, toPage, isDown, toggleDown, token, loginOut };
	},
};
</script>

<style lang="scss" scoped>
.okx-header {
	width: 100%;
	padding: 5px 10px;
	@include flexBetweenCenter();
	height: 42px;
	.okx-header-title {
		font-size: 20px;
		color: #fff;
	}
	.okx-header-btn {
		width: 100%;
		@include flexStartCenter();
		padding: 16px;
		.van-button {
			margin: 0 5px;
		}
		.header-user-status {
			width: 100%;
			padding-right: 50px;
			@include flexStartCenter();
			.name {
				@include flexColumnStart1();
				margin: 0 20px;
				flex: 1;
				span {
					font-size: 16px;
					color: #fff;
					margin: 5px 0;
					@include textEllipsis();
					width: 100%;
				}
			}
		}
	}
	.okx-herder-nav {
		width: 100%;

		.nav-item {
			width: 100%;
			height: 52px;
			@include flexStartCenter();
			font-size: 18px;
			color: #fff;
			padding: 0 20px;
			&.down {
				@include flexBetweenCenter();
			}
		}
		.down-content {
			width: 100%;
			height: 42px;
			@include flexStartCenter();
			font-size: 16px;
			color: #fff;
			padding: 0 30px;
		}
	}
	::v-deep {
		.van-popup {
			background: #121212;
		}
		.van-cell__title {
			color: #fff;
		}
	}
}
</style>
