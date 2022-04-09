<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="k-line-chart-container">
		<div :id="containerId" class="k-line-chart" />
	</div>
</template>

<script>
import { onMounted, onUnmounted, watch } from 'vue';
import { dispose, init } from 'klinecharts';
import {
	generatedKLineDataList,
	getThemeOptions,
} from '../../utils/kLineChartTools';
export default {
	props: {
		klineData: Array,
		containerId: String,
	},
	setup(props) {
		const startKline = (containerId) => {
			const kLineChart = init(containerId);
			kLineChart.setStyleOptions({
				candle: {
					type: 'area',
				},
				grid: {
					show: true,
					vertical: {
						show: false,
					},
				},
			});
			kLineChart.createTechnicalIndicator('MACD', false);
			kLineChart.createTechnicalIndicator('MA', false, {
				id: 'candle_pane',
			});
			kLineChart.setStyleOptions(getThemeOptions('dark'));
			kLineChart.setLeftMinVisibleBarCount(10);
			kLineChart.setRightMinVisibleBarCount(10);
			const updateData = () => {
				setTimeout(() => {
					const dataList = kLineChart.getDataList();
					const lastData = dataList[dataList.length - 1];
					const newData = generatedKLineDataList(
						lastData.timestamp,
						lastData.close,
						1,
					)[0];
					newData.timestamp += 60 * 1000;
					kLineChart.updateData(newData);
					updateData(kLineChart);
				}, 1000);
			};
			kLineChart.applyNewData(props.klineData);
			updateData();
		};
		onMounted(() => {
			startKline(props.containerId);
		});
		onUnmounted(() => {
			dispose(props.containerId);
		});
		watch(
			() => [props.klineData, props.containerId],
			(prev, next) => {
				dispose(next[1]);
				startKline(next[1]);
			},
		);
		return {};
	},
};
</script>

<style lang="scss" scoped>
.k-line-chart-container {
	@include flexColumnStart1();
	border-radius: 2px;
	background-color: #121212;
	width: 100%;
	height: 600px;
	padding: 16px 6px;
	.k-line-chart {
		width: 100%;
		height: 100%;
	}
}
</style>
