<template>
  <mt-button type="primary" @click="handleClick">primary</mt-button>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
  methods:{
    handleClick(){
      Toast('温馨提示');
    }
  }

  }
</script>

<style>

</style>
