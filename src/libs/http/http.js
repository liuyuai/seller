import axios from "axios";
import QS from "qs"; // QS.stringify 把对象 改成键值对的形式

/*axios.get('/user?ID=12345')或者axios.post('/user'）这种情况
在请求后台的时候 每次都会写过长的url使代码看你来过于多
给写好的方法中 有很多请求头的属性不能配置
在 开发 测试 生产环境的 域名不同  单一的使用没有更好的适用
默认的封装post 和get方法后  可以使用同一的命名规范来看出 接口的调用方式

形成编程的思想的主要原因是 因为调用接口的方式很多  想ajax axios等一些封装过的函数本质来讲
是属于xmlHttpRequest的封装。
那本身是一种封装 你封装的本质原因 自己要明白 要不让换了一个其他的HTTP库 你还是不知道应该怎么封装
这里的本质 应该是取决于 和后台定义 格式


* */

export const createService = function(option) {
  let { baseUrl } = option;

  const service = axios.create();

  let options = {
    baseURL: baseUrl,
    timeout: 1000,
    method: "post",
    withCredentials: true, //是否跨站点访问控制请求
    transformRequest: [
      data => {
        data = QS.stringify(data);
        return data;
      }
    ]
  };

  //        platform 是什么东西
  service.interceptors.request.use(function(config) {
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
      config.headers = {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        platform: "seller"
      };
    }
    return config;
  });
  service.interceptors.response.use(function(response) {
    let data = response.data;
    if (data.success === true) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
  return {
    post: function(url, data) {
      options.url = url;
      options.data = data;
      return service(options);
    },
    get: function(url, data) {
      options.url = url;
      return service(options);
    }
  };
  // return service;
};

// const service = new axios.create({
//   method: "post",
//   timeout: 1000,
//   withCredentials: true, //是否跨站点访问控制请求
//   transformRequest: [
//     data => {
//       data = QS.stringify(data);
//       return data;
//     }
//   ]
// });
// service.interceptors.request.use(function(config) {
//   if (config.method === "get") {
//     config.headers = {
//       "Content-Type": "application/json; charset=UTF-8",
//       platform: "seller"
//     };
//   } else if (config.method === "post") {
//     config.headers = {
//       Accept: "application/json, text/plain, */*",
//       "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//       platform: "seller"
//     };
//   }
//   return config;
// });
// export default service;
