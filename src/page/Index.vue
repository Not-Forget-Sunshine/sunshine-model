<template>
  <div i="my_index">
    <div class="header">
      <div class="picture">
        <img src="../assets/images/web.jpg" alt="">
      </div>
     <div class="word" @click="openWin('ahfiaghf')">程序员快来搬砖吧！</div>
    </div>
  </div>
</template>
<style rel="stylesheet/scss" lang="scss">
  @import "../assets/sass/index";

</style>
<script>
  export default{
    data(){
      return {

      }
    },
    created: function () {
      const that = this;

    },
    mounted(){

    },
    methods: {
      init: function () {

      },
      //打开页面
      openWin: function (url, val) {
        val = val || {};
        tools.router.push({
          path: url,
          query: val
        });
      },
      //关闭页面
      back: function () {
        tools.router.back();
      },

    },
    watch: {

    },
    components: {

    },
    filters: {

    },
  }
</script>
