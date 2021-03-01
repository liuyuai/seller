## 文档说明

目录结构搭建，axios封装，Vuex全局状态管理,router搭建以及权限状态，mock数据结构来实现接口使用Eslint以及git
的hook函数实现代码的commit阶段和push阶段的格式化。加入使用Jest的单元测试。

## 代码规范

## 文件夹命名

全部采用小写方式,以中横线(-)分隔.

不可包含汉字/空格/特殊字符.

有复数结构时,采取复数命名法.

例: 
+ scripts
+ styles
+ images
+ data-models

## 文件命名

全部采用小写方式,以中横线(-)分隔.

不可包含汉字/空格/特殊字符.

有复数结构时,采取复数命名法.

尽量采用一个单词作为文件名

例：

+ detail.js
+ index.html
+ list.js
+ footer.vue
+ footer-nav.vue

### 模块下的文件名

+ order
    + detail.js  (推荐)
    + orderDetail.js (文件名与模块名冗余,不推荐)



### 目录结构

```shell
.
|____filters  # 用于存放全局过滤器
| |____module # 每个过滤器均新建一个文件在此文件夹内
| |____index.js
|____mock   # 接口的mock数据
| |____user.js  # 和user相关的mock数据
| |____index.js
| |____mock.js
|____config.js  # 基本配置信息
|____libs
| |____util.js  # 工具函数(与业务无关)
| |____tool.js  # 工具函数(与业务有关)
| |____validator.js # 字段校验工具
|____main.js
|____components
| |____tgos # 通用全局组件(自动注册)
| | |____static-query.vue
| | |____upload-image-single.vue
| | |____upload-image-more.vue
| | |____index.js
| | |____rs-container.vue
| | |____query-container.vue
|____directive # 通用全局指令(自动注册)
| |____module
| | |____permission.js
| | |____clipboard.js
| | |____highlight.js
| | |____focus.js
| | |____price.js
| | |____resize.js
| |____index.js
|____view
| |____demo
| | |____demo.vue
| |____home # 首页
| | |____home.scss
| | |____home.vue
| | |____home.js
| |____person # 用户相关
| | |____login.vue  # 登录
| |____error-page # 异常页面
| | |____401.vue
| | |____404.vue
| | |____500.vue
|____api    # 后端接口映射
| |____user.js
|____store  # 全局数据
| |____module
| | |____user.js    # 用户数据
| | |____app.js     # 平台数据
| |____index.js
|____router # 路由模块
| |____index.js
| |____routers.js
| |____modules  # 将每个模块需要注册的路由放到此处
| | |____error-page.js
```
