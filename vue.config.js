// 引入等比适配插件
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require("webpack");
// compression压缩后缀
// vue 的配置文件
// 使用等比适配插件
module.exports = {
  //基本路径
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  //构建时输出目录
  outputDir: "dist",
  //放置静态资源的目录
  // assetsDir: "static",
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
  configureWebpack: {
    // 生产环境才去配置
        plugins: [
            new CompressionPlugin({ //此插件不能使用太高的版本，否则报错：TypeError: Cannot read property 'tapPromise' of undefined
                filename: "[path][base].gz", // 这种方式是默认的，多个文件压缩就有多个.gz文件，建议使用下方的写法
                // filename: '[path].gz[query]', //  使得多个.gz文件合并成一个文件，这种方式压缩后的文件少，建议使用
                algorithm: 'gzip', // 官方默认压缩算法也是gzip
                test: /\.js$|\.css$|\.html$|\.ttf$|\.eot$|\.woff$/, // 使用正则给匹配到的文件做压缩，这里是给html、css、js以及字体（.ttf和.woff和.eot）做压缩
                threshold: 10240, //以字节为单位压缩超过此大小的文件，使用默认值10240吧
                minRatio: 0.8, // 最小压缩比率，官方默认0.8
                //是否删除原有静态资源文件，即只保留压缩后的.gz文件，建议这个置为false，还保留源文件。以防：
                // 假如出现访问.gz文件访问不到的时候，还可以访问源文件双重保障
                deleteOriginalAssets: false
            })
        ],
        externals: {
          "vue": "Vue",
          "vue-router": "VueRouter",
          "axios": "axios",
          "moment": "moment",
          "element-ui": "ELEMENT",
        },
        // 分割chunk文件
        // optimization: {
        //   runtimeChunk: 'single',
        //   splitChunks: {
        //     chunks: 'all',
        //     maxInitialRequests: Infinity,
        //     minSize: 20000,
        //     cacheGroups: {
        //       vendor: {
        //         test: /[\\/]node_modules[\\/]/,
        //         name (module) {
        //           // get the name. E.g. node_modules/packageName/not/this/part.js
        //           // or node_modules/packageName
        //           const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
        //           // npm package names are URL-safe, but some servers don't like @ symbols
        //           return `npm.${packageName.replace('@', '')}`
        //         }
        //       }
        //     }
        //   }
        // } 
      },
}
