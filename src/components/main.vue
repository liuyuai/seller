<template>
  <div>
    <el-container>
      <el-header>head</el-header>
      <el-container>
        <el-aside>
          left
        </el-aside>
        <el-main>
          center
          {{ name }}
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import service from "../libs/http/http";
export default {
  data() {
    return {
      name: "dsadsa"
    };
  },
  created() {
    service.post('/user',{name:'liuyu'}).then(data=>{
      console.log(data);
    })
  }
};
</script>

<style scoped></style>
