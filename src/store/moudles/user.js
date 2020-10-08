import { baseService } from "_s/api";
import Cookie from "js-cookie";

/* eslint-disable */
export default {
  state: {
    hasUserInfo:false,
    menuList:[],
    chooseMenuId:""
  },
  getters:{
    headMenuList: state => {
      return state.menuList;
    },
    leftMenuList: state => {
      let data =[];
      state.menuList.forEach(item => {
        if(item.id === state.chooseMenuId){
          data = item.subMenus;
        }
      });
      return data;
    }

  },
  mutations: {
    setUserInfo(state,loggedIn) {
      state.hasUserInfo = loggedIn;
    },
    setMenuList(state, list) {
      state.menuList = list;
    },
    setChooseMenuId(state, id) {
      state.chooseMenuId = id;
    },
    clearState(state,info){
      Cookie.remove("sellerLoginToken",{path:"",domain:".test.66buy.com.cn"});
      state.hasUserInfo = info;
    }
  },
  actions: {
    handleLogin({ commit }, { username, password }) {
      return baseService.extLogin({ username, password });
    },
    getMenuList({ commit }) {
      return baseService.sellerMenu({ username:5025}).then(data => {
        commit("setUserInfo",true);
        commit("setMenuList", data);
        commit("setChooseMenuId", data[0].id);
      });
    },
    handleLogOut({commit}){
      commit("clearState",false);
    }

  }
};
