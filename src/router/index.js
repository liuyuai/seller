import Vue from "vue";
import VueRouter from "vue-router";
// import Main from "_c/main.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Main",
  //   component: Main
  // },
  {
    path: "/",
    name: "login",
    component: () => import("_v/login/login")
  }
];

const router = new VueRouter({
  routes
});

export default router;
