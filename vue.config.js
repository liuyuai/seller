const path = require("path");

module.exports = {
  devServer: {
    port: 8080,
    open: true,
    disableHostCheck:true
  },
  configureWebpack: {
    resolve: {
      alias: {
        _c: path.resolve(__dirname, "src/components/"),
        _v: path.resolve(__dirname, "src/views"),
        _s: path.resolve(__dirname, "src")
      }
    }
  }
};
