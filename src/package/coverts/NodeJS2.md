# NodeJS

## 前提准备

### 安装

官网:https://nodejs.org/zh-cn/

下载安装即可

### 查看版本

进入命令提示符(或终端)，输入node -v即可查看

### 运行JS文件

```
node fileName
```

## 引入模块

### fs模块

#### readFile

##### 相关参数

path:文件所在路径

option(可选):配置dataStr的输出编码值

callBack:处理时调用的回调函数

​	err:失败的结果

​	dataStr:输出的结果值

##### 用法实例

```javascript
const fs = require("fs");
fs.readFile("./1.txt",'utf-8',(err,dataStr)=>{
    if(err){
        console.error(err);
    }
    console.log(dataStr)
});

```

#### writeFile

##### 相关参数

path：文件的路径

data:要写入的数据,

option(可选):以什么编码格式进行写入操作

callBack:执行写入操作的回调

​	err:如果写入成功此值为null，失败着存入相关的失败信息

##### 用法实例

```javascript
const fs = require('fs');
let data = "你好啊我是测试写入文件";
fs.writeFile('./2.txt',data,'utf8',(err)=>{
    if(err)
        console.error(err);
});
```



### path模块

#### join

该函数会将传入的路径进行依次拼接，碰到../时会抵消前面一层的路径

##### 用法实例

```js
const path = require('path');
let p = path.join(__dirname, '../');
console.log(p);
console.log(__dirname);
```

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220202150945527.png" alt="image-20220202150945527" style="zoom:50%;" />

#### basename

可以通过该函数获取路径中的文件名

##### 相关参数

path：路径

ext:文件的扩展名

##### 用法实例

```js
const path = require('path');
const p = "../src/test/index.ts";

let result = path.basename(p);
console.log(result);
```

#### extname

获取路径中的扩展名

##### 相关参数

path：路径

##### 用法实例

```js
const path = require('path');

let p = '../src/app.vue';

let ext = path.extname(p);
console.log(ext);
```

### http模块

如果您想使用nodejs开发后端服务器，那么就需要使用此模块，此模块提供了完整的服务器功能。

#### 创建服务器

```js
const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    console.log('Hello Welcome My NodeJS Web Server');
})
server.listen(4444);
```

#### createServer

创建一个Web服务

##### 用法实例

```js
const server = http.createServer();
```

#### 服务器相关函数

##### on

用于挂载事件

###### 用法实例

挂载一个请求事件

```js
server.on('request', (req, res) => {
    console.log('Hello Welcome My NodeJS Web Server');
})
```

##### listen

用于监听某一个端口，当用户访问这个端口后，指向该服务

###### 相关参数

port：端口号

hostname:主机名

callback:开始监听后的回调函数

###### 用法实例

```js
server.listen(4444);
```

#### req与res

##### req

req的全称是request即请求，该对象包含如下内容:

url:请求的路径信息

method:请求的方式(例如get、post、put、del)

##### 用法案例

```js
    let url = req.url;
    let method = req.method;
```

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220202161243289.png" alt="image-20220202161243289" style="zoom:50%;" />

##### res

res的全称是response即响应，如果想要给请求的用户响应数据，需要用到此参数

###### 用法实例

```js
    res.write('Hello Welcome!\n');
    res.end();
```

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220202161459840.png" alt="image-20220202161459840" style="zoom:50%;" />

## 模块化规范

### 模块化的好处

通过模块化规范可以提高程序的复用性，提高开发效率，同时也可以通过暴露隐藏程序的一些细节。

可以放置全局变量的污染。

同时可以通过暴露的方式，隐藏模块内部运行的细节。

### module.exports

​	module.exports是commonjs模块化向外暴露的对象，放置在该对象当中的所有内容均可被外部引入时进行访问。

### exports对象

为了简化module.exports的写法，commonJS引入的新写法，默认与module.exports指向同一个对象。

#### 那么何时不指向一个对象？

```js
exports = {
    age:18,
    fun(){
       console.log('模块2的函数执行了'); 
    }
}
```

上述写法在使用时，并不能向外暴露，因为exports的指向变更为了一个全新的对象。

#### 何时指向一个对象?

```js
exports.age = 10;
exports.fun = function (){
    console.log('函数执行了');
}
```

将新的对象或函数挂载到exports指向的原对象身上即可。

## npm与包

### 使用方法

#### 安装

```
npm install packageName
```

#### 卸载

```
npm uninstall packageName
```

#### 版本指定

```
npm install packageName@version
```

如果version是一个数字，则会安装该版本的最后一个版本,如果指定具体版本号(例如1.0.1)则会安装目标版本。 

#### 初始化项目

```
npm init -y
```

#### 快速初始化项目

```
npm install
```

#### 将包仅用于开发环境

```json
npm install packageName -D
//或使用下列写法
npm install packageName --save-dev
```

#### 切换镜像

##### 默认用法

```json
//查看当前镜像
npm config get registry
//设置镜像地址
npm config set registry=targetUrl
```

##### nrm

```json
//查看镜像列表
nrm ls
//切换淘宝镜像
nrm use taobao
```



### Package.json 配置

#### devDependencies

开发时所依赖的包

#### dependencies

生产环境依赖的包

### 包的分类

#### 项目包

安装到项目node_modules文件夹的包

分为：开发依赖包、生产依赖包

#### 全局包

如果在安装某一个包时使用的是-g，则该包为全局包，在所有的项目中都会使用。

#### i5ting_toc

可以将md文档转换为Html的一个工具

##### 用法

```json
npm install -g i5ting_toc

i5ting_toc -f 文件路径 -o 转换完成后自动打开
```

### 包的规范结构

1、每一个包都必须独占一个文件夹

2、包根目录下必须有一个package.json文件

3、package.json文件必须有name、version、main等相关的描述信息。

### 发布包

#### 初始化

一个npm包的基本结构有:

README.MD:项目说明文档

package.json:包的相关描述信息和依赖信息

index.js:项目的入口文件，如果在package.json中设置了main相关的值，可忽略该项，该用main属性指定的目标文件作为入口文件。

#### package.json配置

name:包名称

version:包版本

main:包入口文件

description:包描述

license：开源许可协议

keywords：搜索时的提供的关键字。

#### 发布

再发布前需要先登录自己的npm账号,需要切换到源镜像

```json
npm login
//提示输入账号、密码、邮箱，依次输入即可
```



```json
npm publish 包名
```

#### 删除发布

```json
npm unpublish 包名 -force
```

### 模块的加载机制

#### 优先缓存加载策略

当模块第一次引入后，会被加载到缓存当中，其后再次引入该模块也是从缓存中加载。

#### 优先加载内置策略

如果下载的包名与内置模块重名，则优先加载内置模块

#### 自定义模块加载机制

如果加载的是自定义的模块，需要以./或../开头

使用require引入包时的加载顺序

1、加载同名文件

2、加载补全.js的文件

3、加载补全.json的文件

4、加载补全.node的文件

5、加载失败

#### 第三方模块加载机制

​	如果引入一个第三方模块，则会先在引入该模块的文件目录查找是否有/node_modules/第三方包名

如果没有则一直查找上级目录，直至查找到顶级目录位置。

#### 目录作为模块加载的机制

先去目录下查找package.json文件，并查找json配置文件中main属性指向的文件

如果配置文件中没有main属性会优先加载根目录下的index.js文件



## 问题

### 相对路径

在NodeJS中使用相对路径进行读取文件操作时，会根据运行Node的当前目录为根进行查找，所以在不同位置使用NodeJS运行同一文件，读取的相对目录都完全不一样。

#### 解决方法

1、使用绝对路径

2、使用__dirname表示当前目录

### 响应中文乱码

如果直接使用res进行响应相应的数据会出现乱码的情况

#### 解决方法

给响应头设置响应的编码格式

```js
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.write('Hello Welcome你好呀!\n');
    res.end();
```

