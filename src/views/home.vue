<template>
  <div class="home">
    <img class="home-img" src="@/assets/wel.png" alt="大商天狗欢迎你" />
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      message: "dddd"
    };
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  margin-top: 200px;
  text-align: center;
  .home-img {
    width: 60%;
  }
}
</style>
