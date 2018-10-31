/**
 * 入口js 创建vue 实例
 */
// 引入vue
import Vue from 'vue'
// 引入App vue
import App from './App'
import {
  Button,
  Input
}from 'mint-ui'

Vue.use(Button);
Vue.use(Input);

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
});
