<template>
  <!--
  @mouseenter
  @mouseleave
  -->
  <li @mouseenter="hanLeEnter(true)" @mouseleave="hanLeEnter(false)" :style="{background:bgColor}">
    <label>
      <input type="checkbox" v-model="it.complete"/>
      <span>{{it.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delItm">删除</button>
  </li>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    //接收
    props: {
      it: Object,
      index: Number
    },
    data() {
      return {
        bgColor: 'white',//默认的背景颜色
        isShow: false //按钮默认是否显示
      }
    },
    methods: {
      hanLeEnter(isEnter) {
        console.log(isEnter);
        if (isEnter) {
          this.bgColor = '#aaaaaa';
          this.isShow = true
        } else {
          this.bgColor = 'white';
          this.isShow = false
        }
      },
      delItm() {
        const {index} = this;
        //delIt(index)
        //发布消息
        PubSub.publish('delIt',index)

      }
    }
  }
</script>

<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
