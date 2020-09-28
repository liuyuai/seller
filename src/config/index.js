/*
在正常的工作中，不可能直接从开发环境直接就到线上
中间一定是需要有测试，预发等环境 来保证线上代码的质量
那么对应不同的环境  其域名也就不一样 ， 在接口会有一个经常发生改变
那么为了 让代码适应各个环境 并且可以成功调用接口 而用 每次都去写一些重复的代码
来封装

今天这个问题很好
丰哥问我这段代为什么这么写
我想了好久好久 是为了吃饭
* */
function getEnv() {
  const hostName = location.hostname;
  //在默认的情况下都是在 开发环境
  let env = "dev";
  let domain = ".dev.tgos.com.cn";
  if (hostName.includes("test.66buy.com.cn")) {
    env = "test";
    domain = ".test.66buy.com.cn";
  } else if (hostName.includes("pre.66buy.com.cn")) {
    env = "pre";
    domain = ".pre.66buy.com.cn";
  } else if (hostName.includes("51tiangou.com")) {
    env = "product";
    domain = ".51tiangou.com";
  }
  return {
    SERVER_ENV: env,
    DOMAIN: domain
  };
}
export default { SERVER_ENV, DOMAIN } = getEnv();
