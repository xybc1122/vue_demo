<!--vue的组件创建-->

<!--模板-->
<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
    <item v-for="(comment,index) in comments" :key="index" :comment="comment"/>
  </div>
</template>
<!--JS-->
<script>
  import item from './item'
  export default {
    //props声明接收属性 只指定属性名
    props:['comments'],
    components:{
      item
    }

  }
</script>
<!--CSS样式-->
<style>
  .reply {
    margin-top: 0px;
  }
</style>
