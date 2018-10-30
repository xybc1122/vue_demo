<!--vue的组件创建-->

<!--模板-->
<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>
<!--JS-->
<script>
export default {
  data () { // 必须写函数
    return {
      msg: 'hello Vue'
    }
  }
}
</script>
<!--CSS样式-->
<style>
  .msg{
    color: red;
    font-size: 30px;
  }
</style>
