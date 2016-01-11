var webpack = require('webpack')
var path = require('path');
var entry = ['./src/main'],
buildPath = "/static/"
var plugins = [];
module.exports = {
    entry: entry,
    output: {
         path: __dirname + buildPath,
         // publicPath: '/static/',
         filename: 'build.js'
            },
    module: {
        noParse: [],
        loaders:
            [{test: /\.vue$/,loader: 'vue'},
             {test: /\.js$/,exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,loader: 'babel'}
            ]},
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
    },
    devtool: '#source-map',
    plugins:plugins
}


if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
    new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
    new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
    module.exports.devtool = '#source-map'
}

