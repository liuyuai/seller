/*
接口的使用
1、获取列表数据
2、增删改查  前端多传参  后端反应是否完成需求

面向对象思想  把一个模块中的所有方法 都绑到了这个模块的属性上  也就是一个属性一个方法 调用
* */

// import { createService } from "_s/libs/http/http";
import { createRequest } from "_s/libs/http/api-http";
import base from "./base";
import _ from "loadsh";
import config from "_s/config";
const { DOMAIN } = config;

//_forEach  第一个传参是 几个    第二参数是   value key

function setService(serverList, serverName) {
  let result = {};
  let baseUrl = `//${serverName}${DOMAIN}`;
  _.forEach(serverList, (urlList, mehtod) => {
    _.forEach(urlList, (url, urlName) => {
      result[urlName] = function(data = {}) {
        return createRequest({ baseUrl })[mehtod]({ url, data });
      };
    });
  });
  return result;
}

export const baseService = setService(base, "base");
