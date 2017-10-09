<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>


  export default {
    data(){
      return {

      }
    },
    name: 'app',
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'showLoading'
    },
    beforeCreate:function() {
      var that = this;

    },
    methods:{
      showLoading : function() {
        console.log('改变了导航:', this.$route);
        this.isHavePage();
      },
      /* 判断页面是否存在 */
      isHavePage:function () {
        //首页跳过
        if (this.$route.path == '/') {
          return true;
        }
        //不存在自动跳转到404页面
        if (this.$route.matched.length < 1) {
          tools.router.push('/404');
          return false;
        }

        return true;
      },
    },
    components: {

    },
    mounted(){
      /* 判断页面是否存在 */
      this.isHavePage();
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    min-height: 100%;
    color: #2c3e50;
  }
</style>
