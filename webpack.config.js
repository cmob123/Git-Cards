const HTMLWebpackPlugin = require("html-webpack-plugin");
let HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + "/app/index.html",
	filename: "index.html",
	inject: "head"
});

module.exports = {
	entry: __dirname + "/app/app.js",
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader"
			}
		]
	},
	output: {
		filename: "transformed.js",
		path: __dirname + "/build"
	},
	plugins: [HTMLWebpackPluginConfig]
};