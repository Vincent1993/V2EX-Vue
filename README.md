# V2EX-mobile

## 用到的东西
- Vue2
- Vuex2
- Vue-Router2

## 线上访问地址 www.cusmos.me/v2ex

## 如何开发
```
    git clone https://github.com/Vincent1993/V2EX-mobile.git ***your project***

    npm i

    npm start

    [本地调试](https://localhost:3555)
```

## 目录结构

```
    src/
        assets/                         ---> 静态资源文件
        components/                     ---> 组件文件
        config/                         ---> 项目配置文件
        filters/                        ---> 过滤器(Vue2不存在过滤器，之后统一并入共用函数库中)
        router/                         ---> vue-router配置文件
        store/                          
            actions/                    ---> vuex actions
            getters/                    ---> vuex getters
            modules/                    ---> vuex modules
            index.js                    ---> vuex store
            plugins.js                  ---> vuex plugins
        utils/                          ---> 共用函数
        vendor/                         ---> ThirdParty lib
        views/                          ---> 展示视图库
        main.js                         ---> 入口文件
    .babelrc                            ---> babel 配置文件
    .eslintrc                           ---> eslint 配置文件
    .gitignore                          ---> gitignore
    index.html                          ---> index
    package.json                        ---> package
    README.md                           ---> 本文件
    webpack.config.common.js            ---> webpack通用配置
    webpack.config.dev.js               ---> webpack开发配置
```
