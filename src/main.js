import Vue from 'vue'
import MD from 'markdown'
import Router from 'vue-router'
import App from './components/App.vue'
import List from './views/list.vue'
import Content from './views/content.vue'
import Resource from 'vue-resource'
import filters from './filters/filter'
// 挂载路由
Vue.use(Router)
Vue.use(Resource)
// 初始化路由
var router = new Router()
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

router.map({
  '/list': {
  	name:'list',
    component: List
  },
  '/': {
    component: List
  },
  '/content/:id/':{
  	name:'content',
  	component:Content
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.start(App, '#app')
