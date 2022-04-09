<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="trend-container">
		<div class="trend-main">
			<ul class="trend-time-tabs">
				<li
					v-for="(item, index) in timeTabsMain"
					:key="index"
					:class="{ active: currentIndex === index }"
					@click="changeIndex(index, item)"
				>
					{{ item.name }}
				</li>
				<li @click="toggleDown">
					<van-icon
						:name="isDown ? 'arrow-up' : 'arrow-down'"
						:color="currentDownIndex > -1 ? '#fff' : '#909090'"
					/>
				</li>
				<div class="trend-tabs-more" v-if="isDown">
					<div
						class="item-tabs"
						v-for="(item, index) in timeTabsMore"
						:key="index"
						:class="{ active: index === currentDownIndex }"
						@click="changeDownIndex(index, item)"
					>
						{{ item.name }}
					</div>
				</div>
			</ul>
			<Minute
				v-if="kLineType === 'area'"
				:klineData="klineData"
				:containerId="containerId"
			></Minute>
			<Day
				v-if="kLineType === 'candle_solid'"
				:klineData="klineData"
				:containerId="containerId"
			></Day>
		</div>
	</div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue';
import moment from 'moment';
import Day from './Day.vue';
import Minute from './Minute.vue';
import { generatedKLineDataList } from '../../utils/kLineChartTools';

export default {
	components: {
		Day,
		Minute,
	},
	setup() {
		const isDown = ref(false);
		const data = reactive({
			kLineType: 'area',
			timeTabsMain: [
				{ type: 'area', name: '分时', id: 'update-k-line-mh' },
				{ type: 'candle_solid', name: '1分钟', id: 'update-k-line-1m' },
				{ type: 'candle_solid', name: '5分钟', id: 'update-k-line-5m' },
				{
					type: 'candle_solid',
					name: '15分钟',
					id: 'update-k-line-15m',
				},
				{ type: 'candle_solid', name: '1小时', id: 'update-k-line-1h' },
				{ type: 'candle_solid', name: '1日', id: 'update-k-line-1d' },
			],
			timeTabsMore: [
				{ type: 'candle_solid', name: '4小时', id: 'update-k-line-4h' },
				{ type: 'candle_solid', name: '3日', id: 'update-k-line-3d' },
				{ type: 'candle_solid', name: '1周', id: 'update-k-line-1w' },
				{ type: 'candle_solid', name: '1月', id: 'update-k-line-1M' },
				{ type: 'candle_solid', name: '1年', id: 'update-k-line-1n' },
			],
			currentIndex: 0,
			currentDownIndex: -1,
			klineData: generatedKLineDataList(),
			containerId: 'update-k-line-mh',
		});

		const changeIndex = (value, info) => {
			data.currentDownIndex = -1;
			data.currentIndex = value;
			data.kLineType = info.type;
			let timeValue = moment(new Date()).add(value, 'days').valueOf();
			data.klineData = generatedKLineDataList(timeValue);
			data.containerId = info.id;
		};
		const toggleDown = () => {
			isDown.value = !isDown.value;
		};

		const changeDownIndex = (value, info) => {
			data.currentIndex = -1;
			data.currentDownIndex = value;
			isDown.value = false;

			data.kLineType = info.type;
			let timeValue = moment(new Date()).add(value, 'days').valueOf();
			data.klineData = generatedKLineDataList(timeValue);
			data.containerId = info.id;
		};

		return {
			...toRefs(data),
			changeIndex,
			isDown,
			toggleDown,
			changeDownIndex,
		};
	},
};
</script>

<style lang="scss" scoped>
.trend-container {
	width: 100%;
	padding-bottom: 85px;
	.trend-main {
		width: 100%;
		.trend-time-tabs {
			width: 100%;
			@include flexStartCenterWrap();
			padding: 16px 6px;
			position: relative;
			li {
				width: 44px;
				font-size: 14px;
				margin: 4px 2px;
				color: #909090;
				cursor: pointer;
				&.active {
					color: #fff;
				}
			}
			.trend-tabs-more {
				position: absolute;
				right: 20px;
				top: 50px;
				width: 80px;
				padding: 10px 0;
				background: #2e2e2e;
				border-radius: 4px;
				@include flexColumnStart();
				color: #909090;
				z-index: 99;
				.item-tabs {
					text-align: center;
					padding: 8px 6px;
					font-size: 14px;
					&.active {
						color: #fff;
					}
				}
			}
		}
	}
}
</style>
