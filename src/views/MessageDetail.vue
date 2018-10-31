<template>
  <div>
    <ul>
      <li>id:{{messageDetail.id}}</li>
      <li>title:{{messageDetail.title}}</li>
      <li>content:{{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        messageDetail: {}
      }

    },
    mounted() {
      //模拟ajax
      setTimeout(() => {
        const allMess = [
          {
            id: 1,
            title: 'message001',
            content: `a1`
          },
          {
            id: 2,
            title: 'message002',
            content: `a2`
          },
          {
            id: 4,
            title: 'message004',
            content: `a3`
          }
        ];
        this.allMess = allMess;
        //防止返回的是文本
        const id = this.$route.params.id * 1;
        //find 查找 需要的属性 如果id 为true 获取数据
        this.messageDetail = allMess.find(detail => detail.id = id);
      }, 1000)
    },
    //监听函数
    watch: {
      $route: function (value) { //路由路径(params)发生了改变
        const id = value.params.id * 1;
        this.messageDetail = this.allMess.find(detail => detail.id = id);
      }
    }
  }
</script>

<style>

</style>
