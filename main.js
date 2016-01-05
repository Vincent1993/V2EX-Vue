'use strict'

var Vue = require('vue');
Vue.config.debug = true
var app = Vue.extend({
});
var VueRouter = require('vue-router');
Vue.use(VueRouter);
    //实例化VueRouter
var router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

require('./routers')(router);

router.start(app, "#app");
