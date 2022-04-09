/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */

export function getThemeOptions(theme) {
	const textColorDark = '#929AA5';
	const gridColorDark = '#292929';
	const axisLineColorDark = '#333333';
	const crossTextBackgroundColorDark = '#373a40';

	const textColorLight = '#76808F';
	const gridColorLight = '#ededed';
	const axisLineColorLight = '#DDDDDD';
	const crossTextBackgroundColorLight = '#686d76';

	//主题色

	const textColor = theme === 'dark' ? textColorDark : textColorLight;
	const gridColor = theme === 'dark' ? gridColorDark : gridColorLight;
	const axisLineColor =
		theme === 'dark' ? axisLineColorDark : axisLineColorLight;
	const crossLineColor =
		theme === 'dark' ? axisLineColorDark : axisLineColorLight;
	const crossTextBackgroundColor =
		theme === 'dark'
			? crossTextBackgroundColorDark
			: crossTextBackgroundColorLight;
	return {
		grid: {
			horizontal: {
				color: gridColor,
			},
			vertical: {
				color: gridColor,
			},
		},
		candle: {
			priceMark: {
				high: {
					color: textColor,
				},
				low: {
					color: textColor,
				},
			},
			tooltip: {
				text: {
					color: textColor,
				},
			},
		},
		technicalIndicator: {
			tooltip: {
				text: {
					color: textColor,
				},
			},
		},
		xAxis: {
			axisLine: {
				color: axisLineColor,
			},
			tickLine: {
				color: axisLineColor,
			},
			tickText: {
				color: textColor,
			},
		},
		yAxis: {
			axisLine: {
				color: axisLineColor,
			},
			tickLine: {
				color: axisLineColor,
			},
			tickText: {
				color: textColor,
			},
		},
		separator: {
			color: axisLineColor,
		},
		crosshair: {
			horizontal: {
				line: {
					color: crossLineColor,
				},
				text: {
					backgroundColor: crossTextBackgroundColor,
				},
			},
			vertical: {
				line: {
					color: crossLineColor,
				},
				text: {
					backgroundColor: crossTextBackgroundColor,
				},
			},
		},
	};
}

export function generatedKLineDataList(
	baseTimestamp = Date.now(),
	basePrice = 5000,
	dataSize = 800,
) {
	const dataList = [];
	let timestamp = Math.floor(baseTimestamp / 60 / 1000) * 60 * 1000;
	let baseValue = basePrice;
	const prices = [];
	for (let i = 0; i < dataSize; i++) {
		baseValue = baseValue + Math.random() * 20 - 10;
		for (let j = 0; j < 4; j++) {
			prices[j] = (Math.random() - 0.5) * 12 + baseValue;
		}
		prices.sort();
		const openIdx = +Math.round(Math.random() * 3).toFixed(0);
		let closeIdx = +Math.round(Math.random() * 2).toFixed(0);
		if (closeIdx === openIdx) {
			closeIdx++;
		}
		const volume = Math.random() * 50 + 10;
		const kLineModel = {
			open: prices[openIdx],
			low: prices[0],
			high: prices[3],
			close: prices[closeIdx],
			volume: volume,
			timestamp,
		};
		timestamp -= 60 * 1000;
		kLineModel.turnover =
			((kLineModel.open +
				kLineModel.close +
				kLineModel.high +
				kLineModel.low) /
				4) *
			volume;
		dataList.unshift(kLineModel);
	}
	return dataList;
}
