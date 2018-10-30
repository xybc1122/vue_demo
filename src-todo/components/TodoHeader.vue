<template>
  <div class="todo-header">
    <!-- 给目标元素绑定监听  @keyup. 按enter键-->
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"
           v-model="title" @keyup.enter="add"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: ''
      }
    },
    methods: {
      add() {
        //1检查输入的合法性
        const title = this.title.trim();
        if (!title) {
          alert('必须输入');
          return
        }
        //2 根据输入 生成一个对象
        const it={
          title,
          complete:false
        };
        //3 添加到it 自定义事件接收
        this.$emit('addIt',it);
        //4清楚输入
        this.title=''
      }
    }
  }
</script>

<style>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }

</style>
