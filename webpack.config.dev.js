const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.config.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const mergeWith = require('lodash/mergeWith');

module.exports = mergeWith({
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'build.js',
        publicPath: '//cusmos.me/v2ex/build/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url?limit=100000'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('dev')
            }
        }),
        new ExtractTextPlugin('layout.min.css')
    ],
    vue: {
        loaders: {
            // Extract配置实质上无效，因为js均为异步加载
            sass: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass?indentedSyntax'),
            scss: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass')
        }
    }
}, commonConfig, (objValue, srcValue) => {
    if (Array.isArray(objValue)) {
        return objValue.concat(srcValue);
    }
});
