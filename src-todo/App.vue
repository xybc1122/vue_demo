<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- addIt自定义事件-->
      <TodoHeader @addIt="addIt"/>
      <TodoList :titles="titles"/>
      <TodoFooter :titles="titles" :delCompleteIt="delCompleteIt" :selectAllIt="selectAllIt"/>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'

  export default {
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    },
    data() {
      return {
        titles: [
          {title: '测试1', complete: true},
          {title: '测试2', complete: false},
          {title: '测试3', complete: false}
        ]
      }
    },
    //异步操作
    mounted(){
      //订阅监听 消息 重点
      PubSub.subscribe('delIt',(msg,index) => {
        this.delIt(index)
      })

    },
    methods: {
      addIt(it) {
        //添加到列表第一行
        this.titles.unshift(it)
      },
      delIt(index) {
        //通过下标 删除
        this.titles.splice(index, 1)
      },
      delCompleteIt() {
        //删除所有选中的 titles
        this.titles = this.titles.filter(it => !it.complete)
      },
      selectAllIt(isCheck) {
        //选择全部按钮/全不选
        this.titles.forEach(it => it.complete=isCheck)
      }
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
