<template>
  <div>
    <h1 id="nodejs">NodeJS</h1>
    <h2 id="什么是nodejs？">什么是nodejs？</h2>
    <p>NodeJS是基于Chrome V8引擎的一个JavaScript运行环境，主要用于后端的开发。</p>
    <h2 id="前提准备">前提准备</h2>
    <h3 id="安装">安装</h3>
    <p>官网:<a href="https://nodejs.org/zh-cn/">https://nodejs.org/zh-cn/</a></p>
    <p>下载安装即可</p>
    <h3 id="查看版本">查看版本</h3>
    <p>进入命令提示符(或终端)，输入node -v即可查看</p>
    <h3 id="运行js文件">运行JS文件</h3>
    <pre><code>node fileName
</code></pre>
    <h2 id="引入模块">引入模块</h2>
    <h3 id="fs模块">fs模块</h3>
    <h4 id="readfile">readFile</h4>
    <h5 id="相关参数">相关参数</h5>
    <p>path:文件所在路径</p>
    <p>option(可选):配置dataStr的输出编码值</p>
    <p>callBack:处理时调用的回调函数</p>
    <p>​ err:失败的结果</p>
    <p>​ dataStr:输出的结果值</p>
    <h5 id="用法实例">用法实例</h5>
    <pre><code class="language-javascript">const fs = require(&quot;fs&quot;);
fs.readFile(&quot;./1.txt&quot;,&#39;utf-8&#39;,(err,dataStr)=&gt;{
    if(err){
        console.error(err);
    }
    console.log(dataStr)
});
</code></pre>
    <h4 id="writefile">writeFile</h4>
    <h5 id="相关参数-1">相关参数</h5>
    <p>path：文件的路径</p>
    <p>data:要写入的数据,</p>
    <p>option(可选):以什么编码格式进行写入操作</p>
    <p>callBack:执行写入操作的回调</p>
    <p>​ err:如果写入成功此值为null，失败着存入相关的失败信息</p>
    <h5 id="用法实例-1">用法实例</h5>
    <pre><code class="language-javascript">const fs = require(&#39;fs&#39;);
let data = &quot;你好啊我是测试写入文件&quot;;
fs.writeFile(&#39;./2.txt&#39;,data,&#39;utf8&#39;,(err)=&gt;{
    if(err)
        console.error(err);
});
</code></pre>
    <h3 id="path模块">path模块</h3>
    <h4 id="join">join</h4>
    <p>该函数会将传入的路径进行依次拼接，碰到../时会抵消前面一层的路径</p>
    <h5 id="用法实例-2">用法实例</h5>
    <pre><code class="language-js">const path = require(&#39;path&#39;);
let p = path.join(__dirname, &#39;../&#39;);
console.log(p);
console.log(__dirname);
</code></pre>
    <img
      src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220202150945527.png"
      alt="image-20220202150945527"
      style="zoom:50%;"
    />

    <h4 id="basename">basename</h4>
    <p>可以通过该函数获取路径中的文件名</p>
    <h5 id="相关参数-2">相关参数</h5>
    <p>path：路径</p>
    <p>ext:文件的扩展名</p>
    <h5 id="用法实例-3">用法实例</h5>
    <pre><code class="language-js">const path = require(&#39;path&#39;);
const p = &quot;../src/test/index.ts&quot;;

let result = path.basename(p);
console.log(result);
</code></pre>
    <h4 id="extname">extname</h4>
    <p>获取路径中的扩展名</p>
    <h5 id="相关参数-3">相关参数</h5>
    <p>path：路径</p>
    <h5 id="用法实例-4">用法实例</h5>
    <pre><code class="language-js">const path = require(&#39;path&#39;);

let p = &#39;../src/app.vue&#39;;

let ext = path.extname(p);
console.log(ext);
</code></pre>
    <h3 id="http模块">http模块</h3>
    <p>如果您想使用nodejs开发后端服务器，那么就需要使用此模块，此模块提供了完整的服务器功能。</p>
    <h4 id="创建服务器">创建服务器</h4>
    <pre><code class="language-js">const http = require(&#39;http&#39;);
const server = http.createServer();
server.on(&#39;request&#39;, (req, res) =&gt; {
    console.log(&#39;Hello Welcome My NodeJS Web Server&#39;);
})
server.listen(4444);
</code></pre>
    <h4 id="createserver">createServer</h4>
    <p>创建一个Web服务</p>
    <h5 id="用法实例-5">用法实例</h5>
    <pre><code class="language-js">const server = http.createServer();
</code></pre>
    <h4 id="服务器相关函数">服务器相关函数</h4>
    <h5 id="on">on</h5>
    <p>用于挂载事件</p>
    <h6 id="用法实例-6">用法实例</h6>
    <p>挂载一个请求事件</p>
    <pre><code class="language-js">server.on(&#39;request&#39;, (req, res) =&gt; {
    console.log(&#39;Hello Welcome My NodeJS Web Server&#39;);
})
</code></pre>
    <h5 id="listen">listen</h5>
    <p>用于监听某一个端口，当用户访问这个端口后，指向该服务</p>
    <h6 id="相关参数-4">相关参数</h6>
    <p>port：端口号</p>
    <p>hostname:主机名</p>
    <p>callback:开始监听后的回调函数</p>
    <h6 id="用法实例-7">用法实例</h6>
    <pre><code class="language-js">server.listen(4444);
</code></pre>
    <h4 id="req与res">req与res</h4>
    <h5 id="req">req</h5>
    <p>req的全称是request即请求，该对象包含如下内容:</p>
    <p>url:请求的路径信息</p>
    <p>method:请求的方式(例如get、post、put、del)</p>
    <h5 id="用法案例">用法案例</h5>
    <pre><code class="language-js">    let url = req.url;
    let method = req.method;
</code></pre>
    <img
      src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220202161243289.png"
      alt="image-20220202161243289"
      style="zoom:50%;"
    />

    <h5 id="res">res</h5>
    <p>res的全称是response即响应，如果想要给请求的用户响应数据，需要用到此参数</p>
    <h6 id="用法实例-8">用法实例</h6>
    <pre><code class="language-js">    res.write(&#39;Hello Welcome!\n&#39;);
    res.end();
</code></pre>
    <img
      src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220202161459840.png"
      alt="image-20220202161459840"
      style="zoom:50%;"
    />

    <h2 id="模块化规范">模块化规范</h2>
    <p>在ES6模块化语法规范没出来以前，有许许多多的模块化规范例如CMD,COMMONJS</p>
    <p>我们的NodeJS就是使用的Commonjs模块化规范。</p>
    <h3 id="模块化的好处">模块化的好处</h3>
    <p>通过模块化规范可以提高程序的复用性，提高开发效率，同时也可以通过暴露隐藏程序的一些细节。</p>
    <p>可以放置全局变量的污染。</p>
    <p>同时可以通过暴露的方式，隐藏模块内部运行的细节。</p>
    <h3 id="moduleexports">module.exports</h3>
    <p>​ module.exports是commonjs模块化向外暴露的对象，放置在该对象当中的所有内容均可被外部引入时进行访问。</p>
    <h3 id="exports对象">exports对象</h3>
    <p>为了简化module.exports的写法，commonJS引入的新写法，默认与module.exports指向同一个对象。</p>
    <h4 id="那么何时不指向一个对象？">那么何时不指向一个对象？</h4>
    <pre><code class="language-js">exports = {
    age:18,
    fun(){
       console.log(&#39;模块2的函数执行了&#39;); 
    }
}
</code></pre>
    <p>上述写法在使用时，并不能向外暴露，因为exports的指向变更为了一个全新的对象。</p>
    <h4 id="何时指向一个对象">何时指向一个对象?</h4>
    <pre><code class="language-js">exports.age = 10;
exports.fun = function (){
    console.log(&#39;函数执行了&#39;);
}
</code></pre>
    <p>将新的对象或函数挂载到exports指向的原对象身上即可。</p>
    <h2 id="npm与包">npm与包</h2>
    <p>npm的全称是 Node Package Mangement，是npm.inc提供的一个包管理工具，其官网集成了世界上绝大多数的第三方包。</p>
    <h3 id="使用方法">使用方法</h3>
    <h4 id="安装-1">安装</h4>
    <pre><code>npm install packageName
</code></pre>
    <h4 id="卸载">卸载</h4>
    <pre><code>npm uninstall packageName
</code></pre>
    <h4 id="版本指定">版本指定</h4>
    <pre><code>npm install packageName@version
</code></pre>
    <p>如果version是一个数字，则会安装该版本的最后一个版本,如果指定具体版本号(例如1.0.1)则会安装目标版本。 </p>
    <h4 id="初始化项目">初始化项目</h4>
    <pre><code>npm init -y
</code></pre>
    <h4 id="快速初始化项目">快速初始化项目</h4>
    <pre><code>npm install
</code></pre>
    <h4 id="将包仅用于开发环境">将包仅用于开发环境</h4>
    <pre><code class="language-json">npm install packageName -D
//或使用下列写法
npm install packageName --save-dev
</code></pre>
    <h4 id="切换镜像">切换镜像</h4>
    <h5 id="默认用法">默认用法</h5>
    <pre><code class="language-json">//查看当前镜像
npm config get registry
//设置镜像地址
npm config set registry=targetUrl
</code></pre>
    <h5 id="nrm">nrm</h5>
    <pre><code class="language-json">//查看镜像列表
nrm ls
//切换淘宝镜像
nrm use taobao
</code></pre>
    <h3 id="packagejson-配置">Package.json 配置</h3>
    <h4 id="devdependencies">devDependencies</h4>
    <p>开发时所依赖的包</p>
    <h4 id="dependencies">dependencies</h4>
    <p>生产环境依赖的包</p>
    <h3 id="包的分类">包的分类</h3>
    <h4 id="项目包">项目包</h4>
    <p>安装到项目node_modules文件夹的包</p>
    <p>分为：开发依赖包、生产依赖包</p>
    <h4 id="全局包">全局包</h4>
    <p>如果在安装某一个包时使用的是-g，则该包为全局包，在所有的项目中都会使用。</p>
    <h4 id="i5ting_toc">i5ting_toc</h4>
    <p>可以将md文档转换为Html的一个工具</p>
    <h5 id="用法">用法</h5>
    <pre><code class="language-json">npm install -g i5ting_toc

i5ting_toc -f 文件路径 -o 转换完成后自动打开
</code></pre>
    <h3 id="包的规范结构">包的规范结构</h3>
    <p>1、每一个包都必须独占一个文件夹</p>
    <p>2、包根目录下必须有一个package.json文件</p>
    <p>3、package.json文件必须有name、version、main等相关的描述信息。</p>
    <h3 id="发布包">发布包</h3>
    <h4 id="初始化">初始化</h4>
    <p>一个npm包的基本结构有:</p>
    <p>README.MD:项目说明文档</p>
    <p>package.json:包的相关描述信息和依赖信息</p>
    <p>index.js:项目的入口文件，如果在package.json中设置了main相关的值，可忽略该项，该用main属性指定的目标文件作为入口文件。</p>
    <h4 id="packagejson配置">package.json配置</h4>
    <p>name:包名称</p>
    <p>version:包版本</p>
    <p>main:包入口文件</p>
    <p>description:包描述</p>
    <p>license：开源许可协议</p>
    <p>keywords：搜索时的提供的关键字。</p>
    <h4 id="发布">发布</h4>
    <p>再发布前需要先登录自己的npm账号,需要切换到源镜像</p>
    <pre><code class="language-json">npm login
//提示输入账号、密码、邮箱，依次输入即可
</code></pre>
    <pre><code class="language-json">npm publish 包名
</code></pre>
    <h4 id="删除发布">删除发布</h4>
    <pre><code class="language-json">npm unpublish 包名 -force
</code></pre>
    <h3 id="模块的加载机制">模块的加载机制</h3>
    <h4 id="优先缓存加载策略">优先缓存加载策略</h4>
    <p>当模块第一次引入后，会被加载到缓存当中，其后再次引入该模块也是从缓存中加载。</p>
    <h4 id="优先加载内置策略">优先加载内置策略</h4>
    <p>如果下载的包名与内置模块重名，则优先加载内置模块</p>
    <h4 id="自定义模块加载机制">自定义模块加载机制</h4>
    <p>如果加载的是自定义的模块，需要以./或../开头</p>
    <p>使用require引入包时的加载顺序</p>
    <p>1、加载同名文件</p>
    <p>2、加载补全.js的文件</p>
    <p>3、加载补全.json的文件</p>
    <p>4、加载补全.node的文件</p>
    <p>5、加载失败</p>
    <h4 id="第三方模块加载机制">第三方模块加载机制</h4>
    <p>​ 如果引入一个第三方模块，则会先在引入该模块的文件目录查找是否有/node_modules/第三方包名</p>
    <p>如果没有则一直查找上级目录，直至查找到顶级目录位置。</p>
    <h4 id="目录作为模块加载的机制">目录作为模块加载的机制</h4>
    <p>先去目录下查找package.json文件，并查找json配置文件中main属性指向的文件</p>
    <p>如果配置文件中没有main属性会优先加载根目录下的index.js文件</p>
    <h2 id="问题">问题</h2>
    <h3 id="相对路径">相对路径</h3>
    <p>在NodeJS中使用相对路径进行读取文件操作时，会根据运行Node的当前目录为根进行查找，所以在不同位置使用NodeJS运行同一文件，读取的相对目录都完全不一样。</p>
    <h4 id="解决方法">解决方法</h4>
    <p>1、使用绝对路径</p>
    <p>2、使用__dirname表示当前目录</p>
    <h3 id="响应中文乱码">响应中文乱码</h3>
    <p>如果直接使用res进行响应相应的数据会出现乱码的情况</p>
    <h4 id="解决方法-1">解决方法</h4>
    <p>给响应头设置响应的编码格式</p>
    <pre><code class="language-js">    res.setHeader(&#39;Content-Type&#39;, &#39;text/html;charset=utf-8&#39;);
    res.write(&#39;Hello Welcome你好呀!\n&#39;);
    res.end();
</code></pre>

  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  setup() {
    // $_code
  },
});
</script>