const path = require('path');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, './build/js'),
		filename: 'script.min.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
		],
	},
};
