import axios from "axios";
import QS from "qs";
import {ResponseError, HttpError } from "../custom-error"

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
  get(options) {
    return this.getService(Object.assign(options, { method: "get" }));
  }
  post(options) {
    return this.getService(Object.assign(options, { method: "post" }));
  }
  getService(options) {
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
    service.interceptors.response.use(response => {
      let data = response.data;
      if(data.code === 0){
        return data.data;
      }else{
        return Promise.reject(new ResponseError(data));
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
      });
  }
}
