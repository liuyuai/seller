/*
 * 由于忘记push了 那就新增加一个文件吧  添加分支还怪麻烦的
 *
 * **/

/*
 * 什么是跨域    跨域有哪些方法   在项目中如何使用跨域
 *  1.什么情况是跨域
 *    非同源请求，均为跨域
 *    #什么是同源
 *      如果两个页面拥有相同的协议（protocol）,端口（port）主机(host),那么这两个页面就属于同一个源（origin） 同源策略
 *  2.跨域有哪些方法
 *    #1.jsonp
 *      利用script标签没有跨域限制, 发送带有callback参数的GET请求
 *      只能支持get请求  支持老的IE浏览器
 *
 *    #2cors  兼容性 IE10 &&I IE10+
 *      cors是一个W3C标准，跨域资源共享
 *    浏览器讲cors跨域请求分为了 简单请求和非简单请求
 *      @简单请求
 *        Request Method : post get head
 *        Request Head：
 *                       Accept
 *                       Accept-Language
 *                       Content-Language
 *                       Content-Type: 只限于三个值：application/x-www-form-urlencoded、multipart/form-data、text/plain
 *
 *        简单请求，浏览器直接发出 CORS请求， 具体来说就是在Header中，添加Origin字段
 *
 *      @ 不能满足以上两个条件的就是 非简单请求
 *
 *      非简单请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求
 *        method: origin的请求
 *
 *    #3.nginx 代理跨域
 *        location / {
 *          sadd_header Access-Control-Allow-Origin *;
 *        }
 *
 *    #4.WebSocket协议跨域
 *    #5.postMessage跨域
 *    #6 document.domain + iframe
 *      此方案仅限主域相同，子域不同的跨域场景
 *      说白了就是修改 两个js文件 中的 document.domain  设置相同
 *
 *
 *
 * **/
