/**
 * 入口js 创建vue 实例
 */
// 引入vue
import Vue from 'vue'
// 引入App vue
import App from './App'
import {Button}from 'mint-ui'
Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
});
