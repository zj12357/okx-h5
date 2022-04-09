<template>
	<van-nav-bar
		title="交易记录"
		left-text="返回"
		left-arrow
		@click-left="$router.back()"
		fixed
	/>
	<div class="trade-record-container">
		<div class="trade-form-item">
			<span>时间：</span>
			<input
				type="text"
				@click="showCalendar = true"
				placeholder="请选择时间范围"
				:value="calendarText"
			/>
			<van-calendar
				v-model:show="showCalendar"
				type="range"
				@confirm="onConfirmCalendar"
			/>
		</div>
		<div class="trade-form-item">
			<span>类型：</span>
			<input
				type="text"
				@click="showPicker = true"
				placeholder="请选择类型"
				:value="pickerText"
			/>
		</div>
		<div class="picker-box" v-if="showPicker">
			<van-picker
				title="标题"
				:columns="columns"
				@confirm="onConfirmPicker"
				@cancel="showPicker = false"
			/>
		</div>
		<div class="trade-list">
			<van-list
				v-model:loading="loading"
				:finished="finished"
				finished-text="没有更多了"
				@load="onLoad"
			>
				<van-cell
					title="单元格"
					value="内容"
					v-for="item in recordList"
					:key="item"
				/>
			</van-list>
		</div>
	</div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import moment from 'moment';
export default {
	setup() {
		const data = reactive({
			showCalendar: false,
			calendarText: '',
			columns: ['充值', '提现'],
			showPicker: false,
			pickerText: '',
			loading: false,
			finished: false,
			recordList: [],
		});
		const onConfirmCalendar = (values) => {
			data.showCalendar = false;
			const [start, end] = values;
			data.calendarText = `${moment(start).format(
				'YYYY-MM-DD',
			)}至${moment(end).format('YYYY-MM-DD')}`;
		};
		const onConfirmPicker = (values, index) => {
			console.log(values, index);
			data.showPicker = false;
			data.pickerText = values;
		};

		const onLoad = () => {
			// 异步更新数据
			// setTimeout 仅做示例，真实场景中一般为 ajax 请求
			setTimeout(() => {
				for (let i = 0; i < 10; i++) {
					data.recordList.push(data.recordList.length + 1);
				}

				// 加载状态结束
				data.loading = false;

				// 数据全部加载完成
				if (data.recordList.length >= 40) {
					data.finished = true;
				}
			}, 1000);
		};

		return {
			...toRefs(data),
			onConfirmCalendar,
			onConfirmPicker,
			onLoad,
		};
	},
};
</script>

<style lang="scss" scoped>
.trade-record-container {
	width: 100%;
	background-color: #fff;
	padding: 46px 20px 0;
	min-height: calc(100% - 50px);
	.trade-form-item {
		width: 100%;
		padding: 10px 15px;
		@include flexStartCenter();
		span {
			color: #1f2533;
			font-size: 16px;
		}
		input {
			border: none;
			outline: none;
			flex: 1;
			outline: 1px solid #ccc;
			border-radius: 4px;
			padding: 6px;
			font-size: 14px;
		}
	}
	.picker-box {
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: 10;
	}
	.trade-list {
		width: 100%;
		margin-top: 30px;
		@include flexColumnStart();
		.van-list {
			width: 100%;
		}
	}
}
</style>
