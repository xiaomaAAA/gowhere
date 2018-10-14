// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 取消 移动端300毫秒点击事件
import fastClick from 'fastclick'
// 适配所有浏览器
import  'styles/reset.css'
// 不同机型边框像素
import  'styles/border.css'
// 引入阿里图标
import  'styles/iconfont.css'
//  引入使用轮播图的插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 取消 移动端300毫秒点击事件
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)   

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
