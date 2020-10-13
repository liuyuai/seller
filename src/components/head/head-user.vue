<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link"> 5025<i class="el-icon-arrow-down el-icon--right"></i> </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>修改密码</el-dropdown-item>
      <el-dropdown-item command="logout">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import config from "@/config";
import { mapActions } from "vuex";
export default {
  name: "head-user",
  methods: {
    //
    ...mapActions(["handleLogOut"]),
    handleCommand(command) {
      if (command === "logout") {
        this.handleLogOut().then(() => {
          this.$router.replace({ name: config.ROUTER.LOGIN_NAME });
        });
        // window.location.reload();
      }
    }
  }
};
</script>

<style scoped></style>
