/* 路由器模块*/
import Vue from 'vue'
import VeuRouter from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'
import MessageDeDetail from '../views/MessageDetail'
Vue.use(VeuRouter);

export default new VeuRouter({
  //配置n个路由
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      //嵌套路由
      children:[
        {
          path:'/home/news',
          component:News
        },
        {
          path:'/home/message',
          component:Message,
          children:[
            {
              //:id占位
              path:'/home/message/detail/:id',
              component:MessageDeDetail
            }
          ]
        }
      ]
    },
    {
      path:'/',
      redirect:'/about'
    }
  ]
})
