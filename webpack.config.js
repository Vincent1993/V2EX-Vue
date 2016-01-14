var webpack = require('webpack')
var path = require('path');
var entry = ['./src/main']
var entry = ['./src/main'],
    cdnPrefix = "",
    buildPath = "/static/",
    publishPath = cdnPrefix + buildPath;
module.exports = {
    entry: entry,
    output: {
         path: __dirname + buildPath,
         publicPath: '/static/',
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
    plugins:[new webpack.ProvidePlugin({
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  })]
}

