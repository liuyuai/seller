<template>
  <div id="app" :style="bodyStyle">
    <router-view />
  </div>
</template>
<script>
  import {mapState} from "vuex"
  export default {
    name: "App",
    data() {
      return {
      };
    },
    computed:{
      ...mapState({
        bodyStyle: state => state.app.appStyle
      })
    },
    created() {
      window.vm = this;
    }
  };
</script>
<style lang="scss">
  html,
  body{
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-size: 14px;
  }
#app {
  height: 100%;
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
}
</style>
