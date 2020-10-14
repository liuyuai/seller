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
 
 husky  hook  这个git的 一个钩子函数
 可以在定的钩子函数里 执行一些脚本
 不如 push啊  commit啊什么 可以做好格式规范
 
 




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
* 六、 安全问题  如何解决
*
* 1. 我不了解 web安全
* 2. 需要知道 有些攻击方式  解决办法  如何在代码中使用 兼容性  适用场景
*
*       1.CSRF/XSRF（跨站请求伪造）
*         就是在你登录一个网站后 有一些用户信息储存在了浏览器中
*         这时访问其他网站  网站使用你的信息 发出恶意请求
*
*         添加token 增加验证
*
*       2.xss攻击  用户的输入 是一个js脚本 正常执行 产生的问题
*         持久性xss    ： 将脚本植入到服务器上，从而导致每个访问的用户都会执行
*         非持久性xss  ： 对个体用户某url的参数进行攻击
*
*         针对特殊字符转译
*       3.iframe 和点击劫持
*        X-FRAME-OPTIONS
*           deny 表示该页面不允许在frame中展示，即便是在相同域名的页面中嵌套也不允许
*           sameorigin  表示该页面可以在相同域名页面的frame中展示
*           allow-from uti  表示该页面可以在指定来源的frame中展示
*
*
*       4.cdn劫持
*       出于性能考虑，我们会把一些静态资源文件存放在cdn（服务器上）
*
*       SRI  子资源完整性  它用于让浏览器检查所下载的来自第三方的资源未被恶意篡改.
*
*       现在的CDN以支持SRI为荣，
*       script 和 link 标签有了新的属性 integrity，这个属性是为了防止校验资源完整性来判断是否被篡改。
*       它通过 验证获取文件的哈希值是否和你提供的哈希值一样来判断资源是否被篡改。
*
*       使用 SRI 需要两个条件：一是要保证 资源同域 或开启跨域，二是在<script>中 提供签名 以供校验。
*
*
*
* 性能
* 让页面更快的打开 和流畅运行
*
*
*
*
*
* 五、 打包页面  服务器配置页面  目前这里面还是有很多不明白的东西  我需要去购买一个服务器 域名 然后自己去部署一下
*
* 打包工具 (未习得)
*
* nginx 线上配置 简单应用
*
* vue-cli 中执行build的方式 生成dist文件  然后把文件放在服务器上  通过apach、nginx或其他的方式 配置到dist的index.html文件
*
*
*
* vue-admin  iview
*

*
*
* **/

/*
 * import 和 require的区别
 *  1.都是模块引入的方式
 *  import是es6 moudle的方式
 *  require是commonjs的烦死
 *
 * require 是AMD规范引入方式     在运行时调用  所以require理论上可以放在任何地方 值的浅拷贝
 * import 是es6的语法标准        在编译时调用  必须放在文件开头                 属于值的引用
 *
 * **/

/**  why what who when how
 * */

/*

js style代码放到 cdn 上的原因

是因为距离 cdn的服务器近   当第一个人加载完数据后  数据会存储在当地的服务器
这样其他的人在访问的时候  会更快

cdn实现原理

有余用户访问源站业务有性能瓶颈，通过cdn技术把源站的内容缓存到多个节点。用户
向源站域名发出请求，请求会被调度值 最接近用户的服务节点，直接由 服务节点快速响应
有效的降低用户访问延迟，提升可能性



dns解析
1.查看缓存  首先会查看本地缓存查询是否有对应的域名解析ip
2.没有的情况下  向配置的dns服务器发起请求


CNAME作用
别名记录  可以让你访问的资源地址 指向 同一个   那不就是代理么

在cdn中实现原理是 给源站域名添加CNAME，别名为加速节点的域名。当用户向源站发起请求时，
dns服务器解析源站域名时发现有CNAME记录，这时dns服务器会向CNAME域名发起请求，请求会被调度到加速节点









http请求
header
body


为什么压缩js文件

每次发送请求  request Header中的参数都对传一遍 10个请求 就会有10次  增加了请求量

压缩成一个js文件的话   就会请求一次





HTTP2 是可以把多个请求合并一个请求


* **/

/*
1、mock的基本使用
可以通过了解 模板规则 来编写随机数据

2、为什么要使用mock

是为了前端在没有接口的时候，知道后台返回的数据接口后  自己模拟的数据

3.mock的使用方式
  #直接引入使用
  #搭建 mockService 服务器
      可以在vue.config.js 中的 devServer 通过require的方式引入  提前注册
      
 想要封装mock

* **/

/*
Plop 通过其语法 规定需要创建的文件
只是通过命令来 生成所需格式的文件

* **/

/*
 *  查看兼容性问题   can I use
 *
 *
 * **/

/*
 * 安全和性能
 *
 * 需要学习http/ https/http2
 *    https 握手
 *    http2 的特点
 * 浏览器缓存策略
 * 跨域处理
 *  webSocket
 * LRU 实现
 * webpack 优化
 * tree-shaking 按需要 打包
 * HMR 实现原理
 * **/

/*需要学习http/https/http2  我在做项目中应该怎么使用   目前看主要是 在分开发环境和生产环境 使用http 和HTTPS 来区分
  
  #HTTP 是一种TCP/IP的协议
    HTTP 一种client-server协议（PS：客户端-服务器）
    客户端 与 服务器 能够交互（客户端发起请求，服务器返回响应）之前， 必须在这两这间 建立一个 TCP链接
      
      @HTTP会话方式
        1.建立TCP三次握手            In my Style      我行了   好 我知道了 你真的行么   我真的行
                                                      走啊  真去啊  真去 go
            
           @TCP三次握手是什么
            1.三次握手就是 在TCP连接的时候，客户端和服务端一共发了三个包
              第一次握手
               客户端给服务端发一个 SYN报文，并指明 客户端的初始化序列好ISN ，此时客户端 处于 SYN_SEND状态
              第二次握手
                服务器接收到客户端的SYN报文后，会以自己的SYN报文作为应答，并且也指定了自己的初始化序列ISN。
                同时会把客户端的ISN+1作为ACK的值，表示自己已经接收到了客户端的SYN，此时服务器处于SYN_REVD状态
                
                服务器 发送给 客户端 的确认报文 在确认报文段中SYN=1，ACK=1，确认号ack=x+1，初始序号seq=y。
                
                  PS:半连接队列  在服务器发送给 客户端 发完SYN-ACK包后。如果没有收到客户端的确认包，服务器进行重传
                    等待一段时间后还没有，发送第二次重传。 如果重传次数超过规定的最大重传次数，系统将该链接从 半连接队列中删除
                
                  安全问题  SYN攻击  Dos攻击 DOS（Denial of Service）拒绝服务
                   短时间内伪造大量不存在的IP地址，并向Server发送请求。大量堆积队列中  由于队列满 导致 正常请求被丢弃
                   
                   防御SYN攻击的方法
                    SYN timeout
                    增加最大半连接数
                    过滤网关防护
                    SYN cookies技术
           
              第三次握手
                客户端接收到服务端的SYN报文之后，会发送一个ACK报文，表示已经收到了SYN报文，此时客户端处于ESTABLISHED（ps:已确立）状态。
                服务器接收到ACK报文之后，也处于ESTABLISHED状态，此时 双方连接成功。
        2.发送请求
        3.回送响应信息
        4.关闭连接
          四次挥手  也是发四个包
                    
                    1:我要下班了
                    2:哦
                    。。。
                    2:我也要下班了 || 等我在忙会啊，在下班
                    1：好知道了 你先走吧  我等你走了 我在走
          
          第一次挥手：客户端发送一个FIN报文，指定一个序列号。此时 客户端 进入 FIN_WAIT1状态
          
          第二次挥手 服务端收到FIN，会发送ACK报文，且把客户端的序列号+1作为ACK报文的序列号值，表明已经收到了客户端的报文
                    此时服务器处于CLOSE_WAIT状态，客户端进入FIN_WAIT2状态。
                    
          第三次挥手 如果服务端也想断开连接了，和客户端的第一次挥手一样，发送FIN报文，并指定一个序列号。此时服务端处于LAST_ACK的状态
          
          第四次挥手 客户端收到FIN之后，一样发送一个ACK报文回答，然后进入到TIME_WAIT状态。需要过一阵子以确保服务器接收到自己的ACK报文之后
                    进入CLOSED状态 服务端收到ACK报文之后 就处于关闭连接了，处于CLOSED状态。
         
         
       
    为了减轻这些缺陷，HTTP/1.1引入了 流水线（被证明难以实现）和 持久连接（keep-alive）
 
 
  #HTTPS
    @HTTP Strict Transport Security (简称HSTS)
   
    HTTPS 相对于 HTTP  添加了 SSL/TLS加密
      @所谓对称加密   加密解密使用同一个密钥
      @非对称加密   加密和解密用的并不是同一个密钥
      
      HTTPS 握手

    
  #SPDY 基于TCP的会话层协议，用以最小化网络延迟，提升网络速度，优化用户的网络使用体验。
    1.降低延迟  HTTP高延迟问题 SPDY采用了多路复用。 多路复用（多个请求共享一个tcp）
    2.请求优先级   SPDY允许给 每个request 设置优先级  这样我们可以对关键请求设置 高的优先级
    3.header压缩
    4.基于HTTPS的加密协议传输，提高数据传输的可靠性
    5.服务器推送 ，
    
    
  #HTTP2 新特性
   二进制格式
   多路复用
   header压缩
      HTTP2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表
   服务端推送
   
  *  浏览器缓存策略
    Status Code: 200  (from disk cache)  表示从硬盘中读取
    Status Code: 200  (from memory cache) 表示从内存中读取
    
    
    @强缓存
        用户发送的请求，直接从客户端缓存中获取，不发送请求到服务器,不予服务器发生交互行为
    @协商缓存
        用户发出请求，发送到服务器后，有服务器判断是否从缓存中获取资源
        @共同点
          客户端获得的数据最后都是从客户端缓存中获得。
        @区别
          从名字就可以看出，强缓存不与服务器交互，而协商缓存则需要与服务器交互
          
          
        
        Response Header 中
          date: 浏览器请求资源的时间
          etag： http 资源的唯一标识符
          expires: http 设置资源的过期时间
          last-modified(修改): http 资源上一次修改的时间、
          
          #在资源文件的Response Header 中带有 last-modified  但是缺少expires和 cache-control 用来表示资源缓存过期的字段
          浏览器会使用  启发式缓存来确认该资源缓存的过期时间
          
          浏览器会根据 date 和 last-modified 之间的时间差值的10%来作为资源缓存的过期时间
          
        Request Header
        cache-control 首次资源请求
        
        
        #！强缓存
        
        服务器可以通过Response Header 使用功能expires 和 cache-control 来设置一个有效时间，当浏览器再次请求资源时会判断本地
        缓存是否已过期
        1.如果没有过期那么直接从本地读取，不会残生http请求，此为 强缓存
        2.如果已过期，那么浏览器将重新向服务器请求资源，这一过程往往伴随着 缓存检测。
        
        expires
        这是HTTP1.0版本产物,属于Response Headers，使用UTC格式的日期时间字符串表示资源的过期时间
        
        @问题：使用expires设置的过期是以服务器时间为准的，他可能跟浏览器不一致，不同时区也会有存在影响。
        
        cache-control
        这是HTTP1.1版本的产物，属于 Response Headers，提供来了更多的缓存策略，可以根据三种不同性质通过逗号进行组合使用：
          1.是否不使用缓存： cache-control:
                                        no-store/  禁止浏览器缓存资源
                                        no-cache/不管本地缓存是否过期 都需要进行缓存检测
                                        must-revalidate 本地资源缓存没有过期 必须是使用本地
          2.是否为私有缓存： cache-control：public/ 公共缓存 表示浏览器和代理服务器都可以设置缓存
                                          private 私有缓存，仅服务器设置缓存
          3.设置过期时间: cache-control: max-age ：60 单位秒  覆盖expires
                                      /s-maxage  在public下有效
                                      
           使用max-age的有点在于设置的过期时间是一个相对于浏览器的时间，不受服务器和浏览器的时间不一致的影响。
        
      
        
        
        #！协商缓存
        
        当浏览器重新向服务器请求资源时,如果原先的Response Header 中 有last-modified 和 etag信息，
        那么在Request Headers 中通过 if-modified-since 和 if-none-match 将之前的信息带给服务器进行检测。
        如果服务器资源相对于本地的资源缓存没有发生变更，那么将会返回304状态码，表示资源为更新，让浏览器使用
        本地的资源缓存，这就是叫协商缓存
        
        如果原先的 Response Headers 中没有 last-modified 和 etag 信息，那么将从服务器重新下载资源文件。
        
        缓存检测
        
        HTTP1.0
        一.通过last-modified 和 if-modified-since
            1.last-modified 属于Response-Headers, 表示资源最后一次修改，
            
            2.if-modified-since 属于Request Headers, 用来判断服务器资源是否在该传递的时间之后做了修改，
              如果没有修改那么服务器返回304，让浏览器使用资源缓存
              
        HTTP1.1
        二.通过etag 和 if-match-none-match
            1.etag属于  Response Header， 表示资源文件的唯一标识，由服务器生成
            2.if-none-match Request Header，用来判断服务器资源与该传递的标识符一致，如果一致则表示文件没有
            修改过，服务器将返回304状态码，让浏览器使用资源缓存
            会覆盖 if-modified-since的设置
            
        #比较
          使用etag来判断服务器资源是否发生修改，主要考虑
          1.last-modified 只能精确到秒，而有些服务器资源可能在1秒进行了多次修改。
          2.服务器资源文件，有时也会自动生成，但是内容没有发生改变
          
          
          集群部署
          
          html,css,js,img,font 应该使用哪种缓存方式.
          
          1.用户能访问的一定是 index.html文件  所以一定不使用强缓存
          
          为什么要使用缓存呢，让页面访问缓存 来达到更快   都会使用强缓存
          
          那怎么在 资源文件发生改变后能知道
          
          那就是改变 资源文件的文件名    可以通过字符串拼接的方式  在原有文件名后面 + 文件哈希值。这样和上次的文件名不一样就会从新请求
          
          
          哈希值 md5
          
          
          
          PWA 今晚看这个
          
          CacheStorage  不兼容 IE
          
          离线缓存
          
          可以用JS对缓存进行增删改查2
          
          
          
          
          
         
          
         
         
          
 
 *  算法问题
 * 跨域有了解过吗
 * localstorage、sessionStorage 和 cookie 的区别
 * cookie 跨域时候要如何处理
 * electron 这个是什么东西
 * webview 是什么  和
 *  webpack 的性能优化 tree-shaking
 * webSocket 和 ajax 的区别
 *  HMR 实现原理
 * 从 url 到页面显示
 * **/

/*
*
类型，涉及以下：
类型种类
判断
转换
深度拷贝
闭包，涉及以下：
作用域
v8 垃圾回收
变量提升
异步，涉及以下：
Promsie 的历史，用法，简单手写 Promsie 实现
async await 原理，generator
宏任务与微任务区别
原型链，涉及以下
prototype和 __proto__
继承
oop 编程思想
模块化
CommonJS 和 ES6 module
AMD 与 CMD 区别（比较旧可以忽略）
ES6 特性
let const
箭头函数
Set、Map、WeakSet 和 WeakMap
之前提及的 Promsie，async，Class，Es6 module
参考资料：

* **/
