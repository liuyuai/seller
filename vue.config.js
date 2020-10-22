const path = require("path");

module.exports = {
  devServer: {
    port: 8080,
    open: true,
    disableHostCheck: true
  },
  chainWebpack:config => {
    config.module
        .rule('vue')
        .test(/\.vue$/)
        .use('promise-loader')
        .loader('promise-loader')
        .end()
  },
  configureWebpack: {
    resolve: {
      alias: {
        _c: path.resolve(__dirname, "src/components/"),
        _v: path.resolve(__dirname, "src/views"),
        _s: path.resolve(__dirname, "src")
      }
    },
    resolveLoader: {
      modules: ['node_modules','./loaders/'],
    }
  }
};
