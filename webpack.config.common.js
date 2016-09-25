const path = require('path');
const fs = require('fs');
const autoprefixer = require('autoprefixer');
const entry = ['./src/main'];

module.exports = {
    entry,
    resolve: {
        root: path.resolve(__dirname, 'src'),
        extensions: ['', '.js', '.vue', '.json', '.css'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            views: path.resolve(__dirname, 'src/views'),
            actions: path.resolve(__dirname, 'src/store/actions'),
            getters: path.resolve(__dirname, 'src/store/getters'),
            modules: path.resolve(__dirname, 'src/store/modules'),
            store: path.resolve(__dirname, 'src/store'),
            utils: path.resolve(__dirname, 'src/utils'),
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [
            {
                test: /\.json$/i,
                loader: 'json'
            }
        ]
    },
    postcss: () => {
        return [
            autoprefixer({
                browsers: ['last 4 versions', 'ie >= 8']
            })
        ];
    }
};
