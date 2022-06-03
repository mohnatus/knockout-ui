const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
		},
	},
	entry: {
		dates: './src/pages/dates.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.less$/i,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-sprite-loader',
						options: {
							symbolId: filePath => {
								let fileData = path.parse(filePath);
								return 'i-' + fileData.name;
							}
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Knockout UI',
			template: 'src/index.html',
			filename: 'index.html',
		}),
		new HtmlWebpackPlugin({
			title: 'Knockout UI - Dates',
			template: 'src/dates.html',
			filename: 'dates.html',
			inject: 'body',
		}),
	],
	devServer: {
		static: './dist',
	},
};
