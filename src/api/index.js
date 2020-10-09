/*
接口的使用
1、获取列表数据
2、增删改查  前端多传参  后端反应是否完成需求

面向对象思想  把一个模块中的所有方法 都绑到了这个模块的属性上  也就是一个属性一个方法 调用
* */

// import { createService } from "_s/libs/http/http";
import { createRequest } from "_s/libs/http/api-http";
import base from "./base";
import ao from "./ao";
import _ from "loadsh";
import config from "_s/config";
const { DOMAIN } = config;

//_forEach  第一个传参是 几个    第二参数是   value key


//在这面添加fn 是为了在接口调用的时候  面对特殊 很特殊的那种情况 来使用不同方法  使用的时 callback的方式来解决的

function setService(serverList, serverName) {
  let result = {};
  let baseUrl = `//${serverName}${DOMAIN}`;
  _.forEach(serverList, (urlList, mehtod) => {
    _.forEach(urlList, (url, urlName) => {
      result[urlName] = function(data = {}, fn) {
        return createRequest({ baseUrl })[mehtod]({ url, data },fn);
      };
    });
  });
  return result;
}

export const baseService = setService(base, "base");
export const aoService = setService(ao, "ao");
