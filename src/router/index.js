import Vue from "vue";
import VueRouter from "vue-router";
import Main from "_c/main.vue";
import store from "@/store";
import config from '@/config'
let {HOME_NAME, LOGIN_NAME} = config.ROUTER;
import { findChild } from "@/libs/tool"

Vue.use(VueRouter);

const IndexRouter = {
  path: "/",
  name: "_home",
  redirect: "/home",
  component: Main,
  children:[
    {
      path: "/home",
      name: HOME_NAME,
      component: () => import("_v/home")
    }
  ]
};

const routes = [
  IndexRouter,
  {
    path: "/login",
    name: LOGIN_NAME,
    meta: {
      notAuth: true
    },
    component: () => import("_v/login/login")
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

router.beforeEach((to, from, next) => {
  //在登录状态下
  const { meta: toMeta = {} } = to;
  if(store.state.user.hasUserInfo){
    // 如果去的是当前的 页面什么也不敢
    if(to.name === from.name){
      //do nothing
    }
    else if(to.name === LOGIN_NAME){
      next({name:HOME_NAME});
    }else{
      next();
    }
  }else{
    store.dispatch("getMenuList").then(() =>{
      let menuData = store.state.user.menuList;
      const result = findChild(menuData);

      //一次解决的方法失败
      //这里太蠢了使用递归  如果level等于3 直接装起来 然后break就得了  想太多
      // function dp(arr) {
      //   if(arr.length>0){
      //     let result = [];
      //     let list = arr;
      //     let len = arr.length;
      //     for(let i= 0;i<len;i++){
      //       if((list[i].subMenus && Array.isArray(list[i].subMenus))){
      //         result.push(...dp(list[[i].subMenus])) ;
      //       }else{
      //         if(list[i].level === 3)
      //         result.push(list[i]);
      //       }
      //     }
      //     return result;
      //   }
      // }

      IndexRouter.children = [...IndexRouter.children,...result];
      router.addRoutes([IndexRouter]);
      next({ ...to, replace: true });
    })
      .catch(() => {
        if (toMeta.notAuth) {
          next();
        } else {
          next({ name: LOGIN_NAME });
        }
      });
  }
});

export default router;
