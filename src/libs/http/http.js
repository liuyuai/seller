import axios from "axios";

/*axios.get('/user?ID=12345')或者axios.post('/user'）这种情况
在请求后台的时候 每次都会写过长的url使代码看你来过于多
给写好的方法中 有很多请求头的属性不能配置
在 开发 测试 生产环境的 域名不同  单一的使用没有更好的适用
默认的封装post 和get方法后  可以使用同一的命名规范来看出 接口的调用方式
* */

const service = new axios.create({
  baseURL: "lalala",
  headers: {}
});

export default service;
