const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.dev.js');
const port = 3555;
// 是否使用https
const useHttps = true;
const protocol = useHttps ? 'https:' : 'http:';

// for (const entry in config.entry) {
//     if (entry === 'vendor') {
//         continue;
//     }

//     config.entry[entry].unshift(
//         `webpack-dev-server/client?${protocol}//localhost:${port}/`,
//         'webpack/hot/dev-server'
//     );
// }

config.output.publicPath = `${protocol}//localhost:${port}/dist/`;

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    contentBase: __dirname,
    hot: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
});

server.listen(port);
