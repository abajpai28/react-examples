module.exports = {
	entry: './App.js',
	output: {
		path: __dirname,
		filename: 'app.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_module/, 
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
};