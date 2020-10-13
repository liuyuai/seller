<template>
  <div class="head-bar">
    <div class="logo">
      logo
    </div>
    <div class="menu">
      <head-menu :headMenuList="headMenuList"></head-menu>
    </div>
    <div class="user">
      <head-user></head-user>
    </div>
  </div>
</template>

<script>
import HeadMenu from "./head-menu";
import HeadUser from "./head-user";
export default {
  name: "index",
  props: {
    headMenuList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    HeadMenu,
    HeadUser
  }
};
</script>

<style scoped lang="scss">
.head-bar {
  display: flex;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-bottom: 1px solid #eee;
  .logo {
    width: 200px;
  }
  .menu {
    flex: 1;
  }
  .user {
    width: 200px;
  }
}
</style>
