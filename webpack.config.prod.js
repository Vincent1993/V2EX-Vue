const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.config.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const mergeWith = require('lodash/mergeWith');
const isEnvDev = process.env.NODE_ENV !== 'production';
const buildDirectory = isEnvDev ? './build/' : './dist/';

module.exports = mergeWith({
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: 'build.js'
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
                test: /\.(png|jpe?g|gif)$/,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[path][name].[ext]?v=[hash]',
                    'image?{bypassOnDebug: true, progressive:true, optimizationLevel: 3, pngquant:{quality: "65-80", speed: 4}}'
                ]
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin('layout.min.css'),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            },
            comments: false,
        })
    ],
    vue: {
        loaders: {
            // Extract配置实质上无效，因为js均为异步加载
            sass: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss!sass?indentedSyntax'),
            scss: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss!sass')
        }
    }
}, commonConfig, (objValue, srcValue) => {
    if (Array.isArray(objValue)) {
        return objValue.concat(srcValue);
    }
});
