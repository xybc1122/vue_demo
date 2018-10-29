<!--vue的组件创建-->

<!--模板-->
<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        <div class="handle">
          <a href="javascript:;">删除</a>
        </div>
        <p class="user"><span>{{comment.name}}</span><span>说:</span></p>
        <p class="centence">{{comment.content}}</p>
      </li>
    </ul>
  </div>
</template>
<!--JS-->
<script>
  export default {
    //声明接收   comment: Object 指定属性名和属性值的类型
    props: {
      comment: Object
    }
  }
</script>
<!--CSS样式-->
<style>

  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
