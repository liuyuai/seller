/*  第一步封装了axios在面向对象方式中  一开始没有理解 为什么使用class这种方式来定义
因为保证每个请求都是独立的  较少耦合性  因为在返回一个对象的情况下，会有覆盖这一问题

在请求头中 platform的用处 不了解

属于自定义属性范畴  具体规定和后端配合  key：value 的形式都不同


封装自定义错误是 为什么可以  extends Error  这个完全不知道


比较之前做ordercenter和现在seller在想法上有一些问题，但大多不管痛痒  很多问题只是没有很好的去思考一个 规范化，很多的代码基本都是想哪里写哪里
上一次做 只是考虑了一个环境  在全部环境上有一些出入

明白VueX中应该存些什么



 * */

/*
vueX  state中存储状态
      getter 暴露在store上 可以通过store.getters.  来访问 getters中的方法 getters和computed比较像  可以返回各种state的符合规则的值
      并且会因为state中的值发生改变而改变
      mutations中修改state中的值 需要同 store.commit(方法名)来实现
      mutitions:{
        add(state){
            state++
        }
      }
      action提交的是mutation 也是需要 store.commit（方法名）来实现
      actions:{
        add(context){  context是一个与 store 实例具有相同方法和属性的对象
          context.commmit('add')
        }
      }
      modules：模块化的一种方式
      modules：{
        引入的其他对象
      }



* **/

/*
在使用vueRouter的时候  动态加载路由后  会出现刷新失效的问题
需要使用  next({...to,replace:true})

在页面刷新的时候



* **/


/*

使用回调函数
promise 被reject 且没有reject处理器的时候  会触发unhandledrejection 事件

使用webpack配置





* **/

/*
* 分清框架层 和业务层
*
* 逻辑 mdzz
* **/


/* 上传文件
1.通过form的方式
<form action="接口" enctype="multipart/form-dat" type="post" target=" iframe的id">
<input type="file">
</form>

<ifrmae name='upload' id='uploader1'></iframe>
这种方式由于不知道 是否上传完成
所以这可以在页面中添加 iframe

var iframe = document.getElementById("uploader1");
iframe.onload = function(){

}
当iframe.onload函数触发时 也就是上传完成了


2.formData上传   今天刚知道这个原生方法

如果送出时的编码类型被设为 "multipart/form-data"，它会使用和表单一样的格式。
var formData = new formData;

formData.append('file',file);

3.fileReader读取文件数据 上传

var fr = new FileReader();
fr.readAsDataURL(file);
fr.onload = function(event){
  var data = event.target.result; // 此处获得的data是base64格式数据
  img.src = data;
  执行 ajax
}

在封装axios接口的时候 根本没有考虑到 上传的情况
elementUI使用的时form的形式来做的  提供了上传的方式方法


* **/




/*
在使用一个东西的时候

1.首先要考虑兼容性的问题  你封装的这个东西 需要给谁使用

* **/


/* 单元测试
单元测试是什么
<div>{{message}}</div>
<input v-if='error'>

测试最小单元 ，要把问题分解成最小单元 来看
比如
message是否渲染
如果 error 是 true，则 input 应该展示
如果 error 是 false，则  input   不应该展示

我们为什么要使用单元测试
1.提供描述组件行文的文档  这样在其他程序员在接收代码后  可以通过单元测试  更快的去了解 组件的功能  逻辑功能 业务功能
总结来来讲就是 维护复杂的基础代码


单元测试

可以快速运行
易于理解
只测试一个独立单元的工作


2. 优化设计
3.便于尤其重构
4.减少手动测试的时间



#单元测试的覆盖性是否全面

在写需求的时候  以编写测试用例开始   在进行手动测试  也就是BDD时


发现问题 及时添加 新的 单元测试

所以一开始先从黑盒用例来写
我们在bugfix(漏洞补缺)或者feature addtion的过程中可以逐步增加测试用例

单元测试定级
1、正常流程  输入正确内容  返回正确内容
2、异常流程 输入错误 不能抛出系统流程  走自定义逻辑异常 通知上层调用代码其错误之处
3、极端情况 和 边界数据可用
4、所有分支 循环 逻辑走通 不能有任何流程 测试不到
5、输入数据的所有字段验证，对有复杂数据结构的输出 确保每个字段都是正确的






#单元测试赋予我们的能力
 TDD 测试驱动开发、
 
 在测试驱动开发中，每一个新特性都是以 编写测试开始。
 BDD 行为驱动开发
 
 
 
 
#什么时候用单元测试  什么时候不用单元测试



#为什么你的项目中没有使用单元测试

前端方面大多是快速迭代 敏捷开发的，就算是框架都是以小而美为主
而且前端的单元测试 并不能覆盖所有场景  面对频繁的修改  弊大于利

 @codeReview  对于代码进行评审
 
 hooks




编写单元测试 会使为我们从 调用者  这个角度开始 观察 思考



单元测试通过了并不意味着程序就没有bug了，但是不通过程序肯定有bug。



#MDZZ 又讲了 函数式编程


#幂等

对于单元测试来说，保证其幂等性非常重要。幂等就是在相同输入的前提下，其输出结果不随时间而改变。

因为一个功能就是一个函数   对于编写单元测试 会更加方便

#自动化单元测试解决


单元测试  框架层

单元测试的核心

1、可以快速检验之前的代码是否有问题，本次修改代码 是否影响了之前代码
2、通过 单元测试 我们可以了解业务逻辑， 在之后的 重构 设计 代码更好
3、提高效率 在编写测试用例后  已进行一部分测试。 减少测试人员对于 一些小功能的检测 有更多的时间去关注 主要业务





* **/


/*
在vue中 引入外部插件
需要调用 vue.use() 这个方法会调用 引入对象的 install 方法  然后通过Vue.components('组件名'，组件);

elementUI 可以全局引入 也可以按需引入

按需导入可以在这个组件添加一个 install方法 来实行 Vue.components("组件名",组件)

封装组件的基本思想








* **/

/*
今天在研究组件安装  然后看了下组件安装
然后看见了 标签上 role这个属性  这个属性呢 是为了告诉 辅助设备（如屏幕阅读器） 这个元素所扮演的角色  属于 wai-aria

wai-aria是无障碍网页应用  也就是针对残疾人（ps:盲人） 如屏幕阅读器，屏幕阅读机可以大声朗读或者输出盲文。


封装组件


1. 由于大多数人开始都是通过 html来编写的  所以的组件 形式用法 要尽量和html一样

什么时候使用render 什么时候使用模板


* **/


/*
* hook 这个东西看一下
* RBAC权限模型
* 添加mock
*
* **/


/*
* 封装框架 是为了约束 规范
*
* **/


/*
*   ！！需要了解封装框架的 基本思想
*
*
* 一、封装axios
* 封装方法  （面向对象注册接口）  函数式变成 注册接口
* 需要request请求配置
* 相应response 接受数据处理
* 了解http特性(未习得)
* 封装 特殊化code  自定义错误
* 特殊化code 自定义错    1.通过callback传入请求 来实现
*                       2. promise.reject 抛出错误  通过 window.addEventListener("unhandledrejection") 来全局监听没有catch的reject
*                       3. 可以通过webpack 来解决 （未习得）
*
* 二、权限封装  这里有问题 需要考虑
*
* 三、动态路由加载   路由守卫
* 四、 添加单元测试  了解单元测试  了解codeReview评审  1.（并且可以通过自动化测试来解决一些规范化问题）eslint配置（未习得）
*                                                   2.（在git 打包前  运行一些脚本）hook（未习得） 需要了解一些其他的
*
*
* ！！！未完成
*
* UI本来想试一试svg 没有svg文件 失败了
*
*
* 六、 安全问题  如何解决
* 五、 打包页面  服务器配置页面
*
* 打包工具 (未习得)
* nginx 线上配置
*
* vue-admin  iview
*

*
*
* **/


