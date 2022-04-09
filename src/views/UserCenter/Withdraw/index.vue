<template>
	<van-nav-bar
		title="提现"
		left-text="返回"
		left-arrow
		@click-left="$router.back()"
		fixed
	/>
	<div class="withdraw-container">
		<Card v-if="!isBindCard"></Card>
		<van-form @submit="onSubmit" class="withdraw-form" v-else>
			<van-cell-group inset>
				<van-field
					v-model="amount"
					name="金额"
					label="金额"
					placeholder="请输入金额"
					:rules="[{ required: true, message: '请输入金额' }]"
				/>
			</van-cell-group>
			<div class="withdraw-btn">
				<van-button round block type="primary" native-type="submit">
					提交
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue';
import Card from './Card.vue';
export default {
	components: {
		Card,
	},
	setup() {
		const data = reactive({
			amount: '',
		});
		const isBindCard = ref(false);
		const onSubmit = (values) => {
			console.log('submit', values);
			isBindCard.value = true;
		};
		return {
			...toRefs(data),
			isBindCard,
			onSubmit,
		};
	},
};
</script>

<style lang="scss" scoped>
.withdraw-container {
	width: 100%;
	background-color: #fff;
	padding: 46px 20px 0;
	min-height: calc(100% - 50px);
	.withdraw-form {
		padding-top: 30px;
		.withdraw-btn {
			margin-top: 20px;
		}
	}
}
</style>
