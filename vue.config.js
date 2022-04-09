/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
const { VUE_APP_API_URL,VUE_APP_TITLE } = process.env;

module.exports = {
	publicPath: '/h5',
	outputDir:'h5',
	//多页面打包配置
	pages: {
		index: {
			// page 的入口
			entry: 'src/main.js',
			// 模板来源
			template: 'public/index.html',
			// 在 dist/index.html 的输出
			filename: 'index.html',
			// 当使用 title 选项时，
			// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
			title: VUE_APP_TITLE,
			// 在这个页面中包含的块，默认情况下会包含
			// 提取出来的通用 chunk 和 vendor chunk。
			chunks: ['chunk-vendors', 'chunk-common', 'index'],
		},
	},

	// css相关配置
	css: {
		// 开启 CSS source maps?
		sourceMap: false,
		// css预设器配置项
		loaderOptions: {
			scss: {
				// 全局引入变量和 mixin
				prependData: `@import '@/assets/scss/index.scss';`,
			},
		},
	},
	configureWebpack: {},

	devServer: {
		open: true, // 打开浏览器
		port: 8080,
		https: false,
		proxy: {
			'/api': {
				target: VUE_APP_API_URL,
				changeOrigin: true,
				logLevel: 'debug',
				headers: {
					Cookie: '',
				},
				pathRewrite: {
					'^': '',
				},
			},
		},
	},
};
