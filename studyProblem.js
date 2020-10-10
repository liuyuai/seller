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