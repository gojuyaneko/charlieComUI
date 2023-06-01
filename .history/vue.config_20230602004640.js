// 引入等比适配插件
const webpack = require("webpack");
// vue 的配置文件
// 使用等比适配插件
module.exports = {
  //基本路径
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  //构建时输出目录
  outputDir: "dist",
  //放置静态资源的目录
  assetsDir: "static",
  //html 的输出路径
  indexPath: "index.html",
  // 文件名哈希
  filenameHashing: true,
  //是否在编译时进行“eslint-loader”进行检查
  lintOnSave: true,
  // 适配大屏
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions:{
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 192,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: ['no-conversion-'],
            replace: false,
            mediaQuery: false,
            minPixelValue: 12,
            exclude: /node_modules/i

          }),
        ]
      }
      }
    }
  },
  productionSourceMap: true,
  // productionSourceMap: process.env.NODE_ENV === 'development',
  chainWebpack: (config) => {
    config.devtool(false);
    if (process.env.NODE_ENV === "development") {
      config
        .plugin("SourceMapDevToolPlugin")
        .use(webpack.SourceMapDevToolPlugin)
        .tap((args) => {
          return [
            {
              filename: "[file].map",
              publicPath: "https://exmaple.com/",
              moduleFilenameTemplate: "source-map",
            },
          ];
        });
    }
  },
};
