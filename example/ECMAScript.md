# ECMAScript语法规则

### ES8 语法新特性

##### Async

在es8中为了更好的解决异步编程，引入了Async关键字，该关键字用于修饰方法:

```javascript
        async function test(){
            return "你好呀";
        }
```

​	其返回值为一个Promise对象，除了使用throw抛出异常外，都会返回一个状态为resolve的Promise对象。如果抛出异常则会返回一个状态为reject的Promise对象。

![image-20211216210219141](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211216210219141.png)

##### Await

​	在es8中提供了一个全新的关键字await，它的作用于ES6中生成器中的yield类似，左边用来书写一个Promise对象或返回Promise的函数，可以返回一个值，如果Promise的状态为resolve时，返回resolve内部的值，如果为reject，需要使用try..catch进行异常捕获。

注:必须在Async内部才可以使用await关键字。

```javascript
        let p = new Promise((resovle,reject)=>{
            resovle("Hello await!");
        })
        async function test(){
           let t = await p; 
           console.log(t);
        }
        test();
```

![image-20211216210856411](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211216210856411.png)

```javascript
        let p = new Promise((resovle,reject)=>{
            reject("Sorry has Error");
        })
        async function test(){
           try{
            let t = await p; 
            console.log(t);
           }catch(e){
               console.log(e);
           }
        }
        test();
```

![image-20211216211019945](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211216211019945.png)

##### 使用Async和Await配合Axios进行请求数据

```js
import axios from 'axios'

async function main(){
    let token = await axios.get('http://localhost:6868/PixelGameStore/User/Login?uname=admin&upwd=admin');
    console.log(token);
}
```

##### 对象的新扩展

###### keys、values、entries

keys用来获取对象属性的键，返回是一个数组类型

values用来返回每一个键对应的值，也是一个数组。

entries用来返回一个对象的每个键值对所对应的数组。

```js
        let school = {
            name:'创新谷',
            address:'济南市长清区创新谷'
        }
        console.log(Object.keys(school));
        console.log( Object.values(school));
        console.log(Object.entries(school));
```

![image-20211216215235724](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211216215235724.png)

###### 获取对象属性的属性描述符

在ES8中为对象的属性添加了几个新的值用来标识对象某一属性的特性:

```javascript
	Object.getOwnPropertyDescriptors(school);
```

![image-20211216215436160](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211216215436160.png)

writable:是否可重写

enumerable:是否可枚举(遍历)

configurable:是否可重新定义

可以通过Object.create进行在创建对象时指定。

```javascript
        Object.create(/*原型对象*/null,/*对象属性*/{
            name:{
                value:'创新谷',
                writable:false,
                configurable:false,
                enumerable:true
            }
        })
```

#### ES9语法新特性

###### 对象rest扩展运算符

虽然在ES6中扩展运算符就已经存在，但仅仅能在数组上进行使用，而不能在对象上使用，在ES9中更新了扩展运算符对对象的支持:

```javascript
        class Person{
            constructor(name,age){
                this.name = name;
                this.age = age;
            }
            call(){
                console.log("My Name is",this.name,"Age:",this.age);
            }
        }

        let xiaoming = new Person("xiaoming",18);

        let {name,age} = xiaoming;
        console.log(xiaoming);
        console.log(name,age);
```

![image-20211218193134007](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211218193134007.png)

扩展运算符在方法中的使用

```javascript
        class Person{
            constructor({name,age}){
                this.age = age;
                this.name = name;
            }
        }
        let xiaoming = new Person({name:'xiaoming',age:18});
        console.log(xiaoming);
```

![image-20211218193353686](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211218193353686.png)

###### 正则命名分组

在ES6时，我们先要获取指定正则位置上的数值时需要用圆括号括起来:

```javascript
        let link = "<a herf='http://pixelbc.cn'>这是一个连接</a>";
        let regx = /<a herf='(.*)'>(.*)<\/a>/;
        let test = regx.exec(link);
        console.log(test);
```

结果:

![image-20211218193550697](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211218193550697.png)

这样我们可以通过对下标的操作，来获取对应的值。

在ES9中为我们提供了正则的命名分组:

```javascript
        let link = "<a herf='http://pixelbc.cn'>这是一个连接</a>";
        let regx = /<a herf='(?<url>.*)'>(?<text>.*)<\/a>/;
        let test = regx.exec(link);
        console.log(test);
```

![image-20211218193734030](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211218193734030.png)

这样我们不会因为其他获取位置需要更改下标了。

###### 反向断言与正向断言

可以通过反向和正向断言来推断要获取内容前方或后方是否符合条件，符合则会返回对应的结果。

在没有使用断言之前:

```javascript
        let text = "你好呀Jack最近Mary过得怎么样？";
        // 获取被问人的名称
        const reg = /\w+/;
        let result = reg.exec(text);
        console.log(result);
```

Result:

![image-20211218194729873](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211218194729873.png)

如果我想获得被问的名称则可以:

```javascript
        let text = "你好呀Jack最近Mary过得怎么样？";
        // 获取被问人的名称
        const reg = /\w+(?=过得怎么样)/;
        let result = reg.exec(text);
        console.log(result);
```

Result:

![image-20211218194840253](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211218194840253.png)

#### ES10语法新特性

###### fromEntries

与ES8中的entries互为逆运算，entries将对象分解为数组或Map，而fromEntries将数组或Map转换为对象

```javascript
        let obj = Object.fromEntries([
            ["name","小明"],
            ["age",16]
        ]);
        console.log(obj)
```

![image-20211218200913807](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211218200913807.png)

###### trimStrat、trimEnd

与ES5中的trim方法类似，用来去除字符串两端的空格，一个是开始，一个是结束。

###### flat、flatMap

flat负责将数组进行展平，例如三维数组展平为二维数组

```javascript
        let arr = [1,2,3,[4,5,6,[7,8]]];
        console.log(arr.flat());
```

Result:

![image-20211218202047163](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211218202047163.png)

而flatMap正好是对map函数的一次展开。

###### Symbol扩展方法description

可以获取Symbol对象的描述

```javascript
        let s = Symbol("创新谷");
        console.log(s.description);
```

Result:

![image-20211218202526721](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211218202526721.png)

#### ES11语法新特性

###### 对象私有属性

在ES11之前想要构造私有属性还是比较难的，但是JS为了更加贴合面向对象的语法，在ES11中添加了对象的私有属性。正在class中声明时需要在变量名称前加#

```javascript
        class Person{
            name;
            #age;
            #weigth;
            constructor(name,age,weight){
                this.name = name;
                this.#age = age;
                this.#weigth = weight;
            }
        }
```

私有化变量只能在类的内部进行调用。

###### Promies.all、Promies.allSettled

这两个方法用于处理批量的异步任务，传入的是一个Promise数组，

all有一个失败，则返回失败，且返回的值，为最后失败的那个值。只有全部成功时，all才返回成功。

allSettled无论如何都会返回成功，如果有失败的话，也会返回成功，且状态(state)和值(value)都是失败时的值。

###### String.matchAll

会将正则表达式进行批量执行，返回的是一个可迭代的对象。可以使用循环进行遍历也可以使用扩展运算符展开。

###### 可选链操作符

在以前我们判断一个对象或它的属性有无需要使用大量的&&进行判断，例如:

```javascript
        function create(config){
            let dbName = config && config.db && config.db.uname;
            console.log(dbName);
        }
        create({
            db:{
                host:'127.0.0.1',
                uname:'root'
            },
            redis:{
                host:'127.0.0.1:6379',
                uname:'root'
            }
        })
```

而使用ES11中新增加的可选链操作符，我们可以这样:

```javascript
        function create(config){
            let dbName = config?.db?.uname;
            console.log(dbName);
        }
        create({
            db:{
                host:'127.0.0.1',
                uname:'root'
            },
            redis:{
                host:'127.0.0.1:6379',
                uname:'root'
            }
        })
```

###### 动态导入import()

在ES11中为我们提供了动态加载，与静态加载不同的是，使用动态加载可以实现懒加载和按需加载.

使用方法:

```javascript
    <button>加载</button>
    <script type='module'>
        document.querySelector('button').addEventListener('click',()=>{
            import('./hello.js').then(module=>{
                module.hello();
            })
        })
    </script>
```

其返回结果唯一Promies对象

成功的函数接收的对象为暴露对象。

Result:

![image-20211218210714222](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211218210714222.png)

###### BigInt

在ES11中新增加了一种数据类型，bigint，用来存储比Number上限还大的数值。

可以使用BigInt函数进行将Number类型转换为BigInt
