var webpack = require('webpack')
//webpck插件
var plugins = [
    // 使用 ProvidePlugin 加载使用率高的依赖库
    new webpack.ProvidePlugin({
      $: 'webpack-zepto'
    })
];
module.exports = {
  entry: './src/main.js',
  output: {
    path: './build',
    publicPath: 'build/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        // edit this for additional asset file types
        test: /\.(png|jpg|gif)$/,
        loader: 'file?name=[name].[ext]?[hash]'
      }
    ]
  },
  resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extension: ['', '.js']
        //别名
        // alias: {
        //     filter: path.join(__dirname, 'src/filters')
        // }
    },
    plugins: plugins
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
