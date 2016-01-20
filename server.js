'use strict'

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
config.entry.unshift('webpack-dev-server/client?http://localhost:8890',"webpack/hot/dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }))
var proxy = [{
    path: "/api/*",
    target: "https://www.v2ex.com",
    host: "v2ex.com"
}]
//启动服务
var app = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot:true,
    historyApiFallback: true,
    proxy:proxy
});
app.listen(8890);
