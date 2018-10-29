<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment"/>
      <!--:comments="comments"传递组件-->
      <List :comments="comments"/>
    </div>
  </div>
</template>

<script>
  // 引入组件
  import Add from './components/Add'
  import List from './components/List'

  export default {
    data () {
      return {
        comments: [
          {name: '恩惠', content: 'vue 还不错1'},
          {name: '婷婷', content: 'vue 还不错2'},
          {name: '嘻嘻', content: 'vue 还不错3'}
        ]
      }
    },
    components: {
      Add, List //映射成标签
    },
    methods:{
      //添加评论
      addComment(comment){
      this.comments.unshift(comment)
      }
    }
  }
</script>

<style>

</style>
