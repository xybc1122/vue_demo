<template>
  <ul class="todo-main">
    <item v-for="(it,index) in titles" :key="index" :it="it" :index="index"/>
  </ul>
</template>

<script>
  import item from './TodoItem'
  export default {
    props: {
      titles: Array
    },
    components:{
      item
    }
  }
</script>

<style>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
