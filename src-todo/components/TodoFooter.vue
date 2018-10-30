<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / {{titles.length}}
        </span>
    <button class="btn btn-danger" v-show="completeSize" @click="delCompleteIt">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props: {
      titles: Array,
      delCompleteIt: Function,
      selectAllIt: Function
    },
    //计算属性
    computed: {
      completeSize() {
        const {titles} = this;
        //console.log(titles.reduce((preTotal,itm) => preTotal + (itm.complete?1:0),0));
        //reduce计算总和方法
        return titles.reduce((preTotal, itm) => preTotal + (itm.complete ? 1 : 0), 0)
      },
      isAllCheck: {
        get() {
          //总数量跟长度相等 勾选
          return this.completeSize===this.titles.length && this.completeSize>0
        },
        set(value) {
          this.selectAllIt(value)
        }
      }
    }
  }
</script>

<style>

  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
