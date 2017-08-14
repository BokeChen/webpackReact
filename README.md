# webpackReact
用webpack自动构建的简单react 项目。项目里面涉及到route和redux模块。webpack使用较常用的happypack 、dll 及server技术。

文件夹结构：
-build           //webpack输出文件
    -bundle.js
    -index.html
    -manifest.json
    -styles.css
    -vendor.6efd1a6fe23853601773.js
-compononet       //组件
    -Main.jsx
    -Topic.jsx
-src
    -Action            
        -action.jsx
    -Config             
        -Route.jsx      
        -Store.jsx
    -Css
        -css.css
    -Img
        -73.png
    -Less
        -less.less
    -Reducer
        -index.jsx
    -Scss
        -scss.scss
    -app.js              // webpack 的入口文件
    -index.html          // html模板，用于生成build/index.html
-.babelrc
-.eslintrc.json          //eslint 的语法配置文件
-.gitignore              //git 上传忽略清单
-LICENSE                 //git MIT协议的license
-package.json            //webpack 的package.json文件 
-postcss.config          // css预处理
-README.md               //项目说明文档
-server.js               //webpack-dev-server 服务器的配置文件
-webpack.config.js       //webpack的配置文件
-webpack.dll.config.js   // dll的配置文件








预先安装好node.js，注意配置好NODE_PATH 的环境变量。
在项目根目录shift+右键，选择 在此处打开Powershell 窗口。在跳出的指令窗口敲 npm install+回车。

在安装好所有模块之后

