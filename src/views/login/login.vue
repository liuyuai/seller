<template>
  <div class="bg">
    <div class="login-box" @keyup.enter="doLogin">
      <h3 class="title text-center">商家登录</h3>
      <el-form :model="form" ref="form">
        <div class="line">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </div>
        <div class="line">
          <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </div>
        <div class="line text-right">
          <el-button type="text">忘记密码</el-button>
        </div>
        <el-button style="width: 100%" type="primary" @click="doLogin">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
// import http from "_s/libs/http/http";
// import { baseService } from "_s/api";
import { mapActions } from "vuex";
import config from "_s/config";

let { HOME_NAME } = config.ROUTER;

export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["handleLogin"]),
    doLogin() {
      //在登录情况下 就是开始需要输入账号密码了 涉及到 接口调用  在人员使用的时候  我现在就想 传参的
      //我这边写着简单 了解axios本质来讲是Promise
      /*]
      axios.post(
          "http://privates/auth/seller/extLogin",
          this.form
        )
        .then(data => {
          console.log(data);
        });
      
    }
    在不进行封装的时候 需要些完整的路径 这个麻烦  在没有配置 request header 中的Content-Type 无法规定传参格式
       */
      // http['post'](
      //   "http://base.test.66buy.com.cn/privates/auth/seller/extLogin",this.form
      // );

      this.$refs.form.validate(validate => {
        if (validate) {
          this.$store.dispatch("handleLogin", this.form).then(data => {
            console.log(data);
            this.$router.replace({ name: HOME_NAME });
          });
        } else {
          return false;
        }
      });

      // baseService.extLogin(this.form).then(data =>{
      //   console.log(data);
      // });
    }
  }
};
</script>

<style scoped lang="scss">
.bg {
  height: 100vh;
  position: relative;
  background: url("../../assets/login.jpg") no-repeat center center;
  background-size: cover;
  .login-box {
    position: absolute;
    border-radius: 4px;
    top: 50%;
    right: 200px;
    width: 330px;
    padding: 0 40px 40px;
    background-color: #fff;
    transform: translateY(-60%);
    .title {
      padding: 15px 0;
    }
    .line {
      padding: 5px;
    }
  }
}
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
</style>
