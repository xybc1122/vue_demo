<template>
  <div>
    <div v-if="!repoUrl">loading....</div>
    <div v-else>请求数据</div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        repoUrl: '',
        repoName: ''
      }
    },
    mounted() {
      //发ajax请求数据
      const url = 'http://127.0.0.1:9001/ajaxLogin?userName=tt&pwd=8';
      const ur2 = 'http://127.0.0.1:9001/admin/add';
      //使用axios
      axios.post(url).then(
        response => {
          //success
          const result = response.data;
          console.log(result);
        }
      ).catch(error => {

      })
    }

  }
</script>

<style>

</style>
