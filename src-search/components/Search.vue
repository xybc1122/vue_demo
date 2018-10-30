<!--vue的组件创建-->

<!--模板-->
<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>
<!--JS-->
<script>
  import PubSub from 'pubsub-js'
  export default {
    data(){
      return{
        searchName:''

      }
    },
    methods:{
      search(){
        const searchName=this.searchName.trim()
        if(searchName){
          //发布搜索消息
          PubSub.publish('search',searchName)
        }
      }
    }
  }
</script>
<!--CSS样式-->
<style>

</style>
