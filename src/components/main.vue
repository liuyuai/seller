<template>
    <el-container class="main-container">
      <el-header :style="headStyle">
        <head-bar :headMenuList="headMenuList"></head-bar>
      </el-header>
      <el-container>
        <el-aside width="200px" :style="leftStyle">
          <left-aside :leftMenuList="leftMenuList"></left-aside>
        </el-aside>
        <el-main :style="mainStyle" class="content">
          <router-view />
        </el-main>
      </el-container>
      <el-footer height="10px"></el-footer>
    </el-container>
</template>

<script>
// import service from "../libs/http/http";
import { mapGetters, mapState} from "vuex";
import HeadBar from './head/index'
import LeftAside from './left-aside/index'
export default {
  data() {
    return {};
  },
  methods:{
  },
  computed:{
    ...mapGetters(["headMenuList", "leftMenuList"]),
    ...mapState({
      headStyle: state => state.app.headStyle,
      leftStyle: state => state.app.leftStyle,
      mainStyle: state => state.app.mainStyle,
    })
  },
  components:{
    HeadBar,
    LeftAside
  },
  created() {
  }
};
</script>

<style scoped lang="scss">
  .el-header{
    padding: 0;
    margin-bottom: 10px;
  }
  .el-aside{
    display: block;
    position: relative;
    overflow-y: auto;
  }
  .border1px{
    border: 1px solid #eee;
  }
  .main-container{
    height: 100%;
  }
  .content{
    margin: 0 10px;
  }
</style>
