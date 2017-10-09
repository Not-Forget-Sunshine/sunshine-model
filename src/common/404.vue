<template>
  <div i="not_found_wrap">
    <div class="not-container-box">
      <div class="not-container">
        <img src="../../static/images/404.jpg">
        <div class="not-container-text">
          <div>抱歉，页面被外星人劫走了~~</div>
          <div class="pt5">
            <span class="num">{{num}}</span>
            <span>秒后自动跳转到</span>
            <router-link to="/index">首页</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style rel="stylesheet/scss" lang="scss">
  @import "../assets/sass/common/base";

  [i="not_found_wrap"] {
    width: 100%;
    height: 100%;
    background: #2b3348;

    .not-container-box {
      width: 100%;
      background-image: url('../../static/images/404_background.jpg');
      height: 100%;

      .not-container {
        width: 100%;
        margin: auto;

        img {
          width: 100%;
        }

        .not-container-text {
          position: relative;
          top: -150px;
          text-align: center;
          font-size: pxTorem(48px);
          /*background: -webkit-linear-gradient(left, #f00, #ff0 25%, #0f0 40%, #0ff 55%, #00f 70%, #f00);*/
          /*-webkit-background-clip: text; !*只有webkit内核支持text的剪切模式*!*/
          /*-webkit-text-fill-color: transparent;*/
          font-weight: 900;
          color: #FFC600;
        }
        .num{
          color: #00E0FF;
        }

      }

    }

    @media screen and (max-width: 768px) {
      .not-container-box {
        background-image: none !important;
      }

      .not-container-box .not-container {
        width: 100%;

        .not-container-text {
          top: -100px;
        }
      }
    }

    @media screen and (max-width: 750px) {
      .not-container-box {
        background-image: none !important;
      }

      .not-container-box .not-container {
        width: 100%;

        .not-container-text {
          top: 0px;
        }
      }
    }
  }
</style>
<script>
  export default{
    data(){
      return {
        num: 5,
      }
    },
    methods: {
      init(){
        const that = this;
        that.time = setInterval(() => {
          that.num--;

          if (that.num <= 0) {
            tools.router.push({path: '/index'});
            clearInterval(that.time);
          }
        }, 1000)
      }
    },
    watch: {},
    components: {},
    filters: {},
    mounted(){
      this.init()
    }
  }
</script>
