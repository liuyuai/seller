import axios from "axios";
import QS from "qs";
import config from "@/config";
import { HttpError } from "../libs/custom-error";
import { formatData } from "@/libs/utils";
const { DOMAIN } = config;

const instance = axios.create({
  baseURL: `//ao${DOMAIN}`,
  timeout: 1000
});

instance.interceptors.request.use(config => {
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
instance.interceptors.response.use(
  response => {
    let data = response.data;
    if (data.code === 0) {
      return data.data;
    } else {
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

export const handleLoginIn = data => {
  return instance.post("privates/auth/seller/extLogin", data);
};
