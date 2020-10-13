import axios from "axios";
import QS from "qs";
import { ResponseError, HttpError, ErrorMessgae } from "../custom-error";
import { formatData } from "@/libs/utils";
// import _ from "loadsh"

export default class HttpRequest {
  constructor(options) {
    let { baseUrl, withCredentials = false, timeout } = options;
    this.baseUrl = baseUrl;
    this.timeout = timeout;
    this.withCredentials = withCredentials;
  }
  getDefaultConfig() {
    return {
      baseURL: this.baseUrl,
      timeout: this.timeout,
      withCredentials: this.withCredentials
    };
  }
  get(options, fn) {
    return this.getService(Object.assign(options, { method: "get" }), fn);
  }
  post(options, fn) {
    return this.getService(Object.assign(options, { method: "post" }), fn);
  }
  getService(options, fn) {
    let service = axios.create();
    options = Object.assign(this.getDefaultConfig(), options);
    this.setInterceptors(service);
    return service(options);
  }
  setInterceptors(service) {
    service.interceptors.request.use(config => {
      if (config.method === "get") {
        let paramsStr = QS.stringify(config.params || config.data || {}, {
          indices: false
        });
        if (paramsStr) {
          config.url = config.url + "?" + paramsStr;
        }
        config.headers = {
          "Content-Type": "application/json; charset=UTF-8",
          platform: "seller"
        };
      } else if (config.method === "post") {
        config.transformRequest = [
          data => {
            data = formatData(data);
            data = QS.stringify(data);
            return data;
          }
        ];
        config.headers = {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          platform: "seller"
        };
      }
      return config;
    });
    service.interceptors.response.use(
      response => {
        let data = response.data;
        if (data.code === 0) {
          return data.data;
        } else {
          // ErrorMessgae(data)
          return Promise.reject(data);
        }
      },
      error => {
        let rejectData;
        switch (error.constructor) {
          case axios.Cancel:
            break;
          default:
            rejectData = new HttpError(error);
        }
        return Promise.reject(rejectData);
      }
    );
  }
}

// 什么都不做的时候，错误的时候，直接alert后台错误
// 特殊code的时候，自定义异常 eg console.log(hello world)

//在特殊状态码的情况下 需要在接口调用的时候catch处 错误来显示错误
