/*
所有的网站中都有一个title 可以使用store来存储默认值
在使用elementsUI的时候 大多组件是通过size来控制不同尺寸的  这个应该是可以存store
* */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/libs/promise-reject-catch";
import Render from "./render";
import "./mock";

Vue.config.productionTip = false;

Vue.component(Render.name, Render);

Vue.use(ElementUI);

/* eslint-disable */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
