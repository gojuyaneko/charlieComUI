# charliecom

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### file construct
- public——存放无需打包编译的静态资源
    - font：字体类型
- assets——存放各个页面通用资源
    - charlie:存放查理苏人像资源
    - homepage：存放首页资源
    - logo：待替换
- components——存放各个页面通用组件资源
    - navBar：网页导航栏
    - indexMenu：网页侧边导航栏
    - charlieMenu:首页邂逅部分导航栏
    - charlieDialog:对话框，显示主线、约会剧情内容
- pages——存放页面
    - ->component：存放页面内使用组件
    - ->img/image：存放页面内使用图片资源
    - charlieIndex.vue:首页
    - subitems：存放导航栏内跳转页面
        - ->sweet：存放甜蜜互动内跳转页面
            - truthOrDare：真心话大冒险
            - dreamWeaving：织梦
    - lightAndNight：光夜变奏
- request——存放api接口文件
    - api：后续请求接口请放置在这里
- router——存放控制路由跳转文件
- store——存放vuex管理文件
### node_modules 依赖文件更改
- 找到node_modules中的lib-flexible 修改 第二个540为width
```JavaScript
    refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }

    // ==>
    refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            width = width * dpr;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }
```
- npm install babel-plugin-component -D后，在node_modules中找到babel-plugin-dynamic-import-node
找到babelrc文件，删除里面内容，替换为
```JavaScript
    {
      "presets": [["es2015", { "modules": false }]],
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    }
```
3.elementui 按需引入！！