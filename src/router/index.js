import Vue from "vue";
import VueRouter from "vue-router";
import Main from "_c/main.vue";
import store from "@/store";
import config from '@/config'
let {HOME_NAME, LOGIN_NAME} = config.ROUTER;

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
}

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
  isAddDynamicMenuRoutes:false,
  routes
});

router.beforeEach((to, from, next) => {
  console.log(to);
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
      function findChild(arr) {
        if(arr.length > 0){
          let list = arr;
          let result = [];
          for(let i = 0;i<list.length;i++){
            formatChild(result,list[i].subMenus);
          }
          return result;
        }
      }
      function formatChild(res,data){
        for(let i = 0;i<data.length; i++){
          if(data[i].level === 3){
            let path = "/"+data[i].state.split(".")[1]+"/" + data[i].state.split(".")[2];
            let name = data[i].state;
            let componentStr = data[i].state.split(".").splice(1,2).join("/");
            res.push({
              path: path,
              name: name,
              component: () => import("_v/"+componentStr)
            })
          }
          if(data[i].subMenus && Array.isArray(data[i].subMenus)){
            formatChild(res,data[i].subMenus)
          }
        }
      }

      IndexRouter.children = [...IndexRouter.children,...result];
      router.addRoutes([IndexRouter]);
          router.options.isAddDynamicMenuRoutes = true;
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
