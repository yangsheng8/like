该项目集成了以下工具
-----------
包管理工具：jsmp；  
模块加载器：systemjs；  
es6转换成es5:babel;  
测试启动器：karma,测试框架：mocha,断言库：chai；  
打包工具：webpack; 
* * *

目录介绍：  

app： 是存放karma 需要测试的js  

css： 存放css 样式  

js：   存放实现逻辑的js  

jspm_packages  ：包管理  

node_modules  : nodejs 需要的依赖包  

test: 编写测试单元  

.balelrc  :  babel 的配置  

config.js : 配置systemjs 需要依赖的包，比如 babel   

index.html:  主要界面  

karma-bundle.js :  依赖 webpack 跑测试的配置  

karma-conf.js : karma 配置  

webpack.config.js : webpack 配置

