# Vue3.X

Vue3相较于Vue2升级了很多东西，其主要表现在轻快。同时拥抱TS，可以使用Vite和Webpack构建。

### 创建Vue3:

```json
vue create <project name>
选择Vue3模板创建即可
```

项目结构:

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211221152253170.png" alt="image-20211221152253170" style="zoom:50%;" />

与Vue2项目结构基本一致。

### Vue3与Vue2 的区别

​	轻量级的createApp函数，Vue3中取消了直接引入Vue 的做法，而是在vue模块中暴露出一个createApp函数，该函数与Vue对象有点区别，它比起Vue更加轻量。

#### main.js文件的改动

##### Vue2 main.js文件

```javascript
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

```

##### Vue3	main.js文件

```javascript
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

```

​	在Vue3中，createApp函数可以传入一个要渲染的Vue实例对象。同时可以指定Vue的目标渲染元素。即ID为app的DOM元素。

#### setup函数

​	在Vue2中我们需要将数据和方法分别挂载到data和methods对象上去，这样我们的vue才能够识别，并渲染到页面。

Vue2中的做法:

```js
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
      return {
          uname:'admin',
          age:18
      }
  },
  methods:{
      hello(){
          console.log('Hello Vue2');
          
      }
  }
}
```

而在Vue3中提供了全新的函数setup，可以供我们存储数据和存储方法:

Vue3方法:

```js
export default {
  name: 'App',
  setup(){
      let uname = 'admin';
      let age = 18;

      function hello(){
          console.log("Hello Vue3");
      }
      return {
          uname,age,hello
      }
  },
  components: {
    HelloWorld
  }
}
```

#### 支持多个根元素

在Vue2中我们创建Vue文件时，需要遵循单根原则，即一个Vue文件只有一个根元素

Vue2:

```vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{uname}}</p>
    <p>{{age}}</p>
    <button @click="hello()">Hello</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
```

只有一个根元素app

Vue3:

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>{{uname}}</p>
  <p>{{age}}</p>
  <button @click="hello()">Hello</button>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>
```

Vue3多个根元素

#### 全新的响应式

在Vue2时我们要修改data中返回的数据会立即响应到页面。

但在Vue3的时候我们要借助vue中的ref函数:

##### 普通数据

```javascript
import {ref} from 'vue'
export default {
  name: 'App',
  setup(){
      let uname = ref('admin');
      let age = ref(18);
      function hello(){
          console.log("Hello Vue3");
      }
      return {
          uname,age,hello
      }
  },
  components: {
    HelloWorld
  }
}
```

其对普通对象仍然使用的是数据拦截和数据代理技术，即getter和setter

##### 对象数据

对象使用ref进行处理时有些特殊，如果我们想要取得数据需要使用value属性进行取得:

通过ref处理后的对象:

![image-20211221165208330](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211221165208330.png)

处理后的对象需要通过value属性取得元数据，但是元数据已经被Proxy进行了代理。

###### 获取属性方法:

```vue
job.value
```

注:proxy中的元数据不需要在使用value进行取值了。

##### 响应式实现原理

以后补充

##### 新的声明周期函数

在V2中为我们提供了8个声明周期函数:

beforeCreate，created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy,destroyed，但是由于V3提供全新的函数setup(用于代替data和methods)，setup的执行是在beforeCteate的之前，有且只执行一次

setup可以接收两个参数，

props:接收父组件传递过来的参数,需要在组件中进行定义

context:应用程序上下午，这里主要存放了props没有接收的参数和emit调用自定义事件,以及slots插槽

props写法:

```js
import {reactive} from 'vue'
export default {
    name:'Demo',
    props:{
        msg:String
    },
    setup(props){
        console.log(props);
        let person = reactive({
            name:'admin',
            age:18,
            job:{
                type:'全栈工程师',
                salary:'20k'
            }
        });
        function hello(){
            console.log(person.job);
        }
        return {
            person,hello
        }
    }
}
```

emit写法:

```JS
export default {
    name:'Demo',
    props:{
        msg:String
    },
    emits:["hello"],
    setup(props,context){
        console.log(props);
        let person = reactive({
            name:'admin',
            age:18,
            job:{
                type:'全栈工程师',
                salary:'20k'
            }
        });
        function hello(){
            context.emit('hello',"Hello V3");
        }
        return {
            person,hello
        }
    }
}
```

#### 全新的数据传递、事件回调、插槽

在Vue2中我们向组件中传递数据:

```vue
<HelloWorld msg="Welcome to Your Vue.js App"/>
```

子组件里:

```js
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
```

#### 引入式计算属性computed

​	在V3中我们需要引入computed才可以使用(当然这不是必须的，你仍然可以使用V2中的写法,但并不推荐使用)。

简写形式:

```js
import {reactive,computed} from 'vue'
export default {
    name:'Demo',
    setup(){
        let person = reactive({
            firstName:'张',
            lastName:'祥同',
            fullName:computed(()=>person.firstName+'-'+person.lastName)
        });
        return {
            person
        }
    }
}
```

全写形式:

```js
import {reactive,computed} from 'vue'
export default {
    name:'Demo',
    setup(){
        let person = reactive({
            firstName:'张',
            lastName:'祥同',
        });
        person.fullName = computed({
                get(){
                   return person.firstName+'-'+person.lastName
                },
                set(value){
                    let nameArr = value.split('-');
                    person.firstName = nameArr[0];
                    person.lastName = nameArr[1];
                }
            })
        return {
            person
        }
    }
}
```

#### 复习V2 的watch语法:

在V2中为我们提供一种监视属性变更的方法即watch函数用法如下:

简写形式:

```js
import {ref} from 'vue'
export default {
    name:'Demo',
    watch:{
        sum(newdValue,oldValue){
            console.log(newdValue,oldValue);
        }
    },
    setup(){
        let sum = ref(0);
        return {
            sum
        }
    }
}
```

全写形式:

```js
import {ref} from 'vue'
export default {
    name:'Demo',
    watch:{
        sum:{
            immediate:true,//立即监听
            deep:true,//深度检测
            handler(newdValue,oldValue){
                console.log(newdValue,oldValue);
            }
        }
    },
    setup(){
        let sum = ref(0);
        return {
            sum
        }
    }
}
```

#### 引入式监视器watch

在V3当中watch也变成了引入式函数(后者说组合式函数)，写法与computed相似:

简写形式:

```js
import {ref,watch} from 'vue'
export default {
    name:'Demo',
    setup(){
        let sum = ref(0);
        watch(sum,(newValue,oldValue)=>{
            console.log(newValue,oldValue);
        })
        return {
            sum
        }
    }
}
```

全写形式:

```js
export default {
    name:'Demo',
    setup(){
        let sum = ref(0);
        watch(sum,(newValue,oldValue)=>{
            console.log(newValue,oldValue);
        },{immediate:true,deep:true})
        return {
            sum
        }
    }
}
```

V3中引入式watch函数可以传递三个配置分别为:traget,handler,configs

##### 多属性同时监视:

得益于引入式函数的缘故，我们可以多次调用watch函数，而不是像我们V2中那样是一个固定的配置项，所以V3的watch中可以一次监视多个值:

```js
import {ref,watch} from 'vue'
export default {
    name:'Demo',
    setup(){
        let sum = ref(0);
        let age = ref(18);
        watch([sum,age],(newValue,oldValue)=>{
            console.log(newValue,oldValue);
        },{immediate:true,deep:true})
        return {
            sum,age
        }
    }
}
```

注:同时值得注意的是newValue和oldValue也会产生变化;

![image-20211223160021177](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211223160021177.png)

这两个参数会变为数组，分别指示第一个监视属性的值和第n个监视属性的值

##### 引入式引发的BUG

在V3中如果我们监视reactive包装的响应式对象时，我们使用watch就会出现如下的BUG

1、无法监视到oldValue

2、deep属性失效，且默认开启deep，且只是在监视reactive所包装的响应式对象中无效，如果响应式中有对象类型的属性，如果仅仅监视这个属性时有效

无效:

```js
        watch(person,(newValue,oldValue)=>{
            console.log(newValue,oldValue)
        },{deep:false})
```

有效:

```js
        watch(()=>person.job,(newValue,oldValue)=>{
            console.log(newValue,oldValue)
        },{deep:true})
```



3、如果想要监视响应式对象的某一个属性时，需要如下写法:

```js
        watch(()=>person.age,(newValue,oldValue)=>{
            console.log(newValue,oldValue)
        })
```

如果监视多个呢?

```js
        watch(()=>[person.age,person.name],(newValue,oldValue)=>{
            console.log(newValue,oldValue)
        })
```

或者

```js
        watch([()=>person.age,()=>person.name],(newValue,oldValue)=>{
            console.log(newValue,oldValue)
        })
```

#### 全新的watchEffect(智能监视)

##### 基本用法

V3提供了全新的监视器,与watch不同的是，watchEffect不考虑监视对象，只要在回调中用到的属性，通通监视。

```js
        watchEffect(()=>{
            let n = person.name;
            console.log('watchEffect被调用')
        })
```

只要person.name属性改变会自动调用watchEffect的回调函数。

##### watchEffect跟computed的区别

1、computed与watchEffect最明显的区别就是，computed必须有返回值，而watchEffect不需要返回值。

2、watchEffect更注重过程，而computed更加注重结果。

#### Vue3.X生命周期图

<img src="https://v3.cn.vuejs.org/images/lifecycle.svg" alt="实例的生命周期" style="zoom: 67%;" />

##### 相较于Vue2.X的变化

​	与Vue2.x相比较来说最大的变化就是beforeDestroy,destroyed变为了beforeUnmount(卸载之前)、unmounted(卸载)取代了之前的beforeDestory(销毁前),destroyed(销毁)，但作用其实是一样的。

##### 如何使用?

写在配置项中:

```js
export default {
    name:'Demo',
    setup(){
        let num = ref(0);
        console.log('---setup---')
        return {
            num
        }
    },
    beforeCreate(){
        console.log('---beforeCreate---')
    },
    created(){
        console.log('---created---')
    },
    beforeMount(){
        console.log('---beforeMount---')
    },
    mounted(){
        console.log('---mounted---')
    },
    beforeUpdate(){
        console.log('---beforeUpdate---')
    },
    updated(){
        console.log('---updated---')
    }
    
}
```

##### 引入式(组合式)写法:

```js
import { ref,onBeforeMount,onMounted,onBeforeUpdate,onBeforeUnmount,onUnmounted } from 'vue'

export default {
    name:'Demo',
    setup(){
        let num = ref(0);
        console.log('---setup---')
        onBeforeMount(()=>{
            console.log('---onBeforeMount---')
        })
        onMounted(()=>{
            console.log('---onMounted---')
        })
        onBeforeUpdate(()=>{
            console.log('---onBeforeUpdate---')
        })
        onMounted(()=>{
            console.log('---onMounted---')
        })
        onBeforeUnmount(()=>{
            console.log('---onBeforeUnmount---')
        })
        onUnmounted(()=>{
            console.log('---onUnmounted---')
        })
        return {
            num
        }
    }
}
```

注:在引入式写法中，不能设置beforeCreate和created两个生命周期钩子

同时需要注意如果引入式和默认写法同时存在，引入式更快一点，但没有什么意义。

#### hook

​	在Vue3中为我们提供了新的复用方法，即hook(钩)，它类似于混入，你可以把对应的业务逻辑放入hook中去，可以很方便的进行复用。例如原来:

我要实现一个获取鼠标当前x和y的坐标点

```js
import { reactive,onMounted,onBeforeUnmount } from 'vue'
export default {
    name:'Demo',
    setup(){
        let point = reactive({
            x:0,
            y:0
        })
        function getPoint(e){
                point.x = e.pageX;
                point.y = e.pageY;
            }
        onMounted(()=>{
            window.addEventListener('click',getPoint)
        })

        onBeforeUnmount(()=>{
            window.removeEventListener('click',getPoint)
        })


        return {point};
    }
}
```

使用hook写法:

创建一个对应的hook文件(即js文件)

我这里创建一个userPoint.js文件

```js
import {reactive,onMounted,onBeforeUnmount} from 'vue'
export default (){
    let point = reactive({
        x:0,
        y:0
    })
    function getPoint(e){
            point.x = e.pageX;
            point.y = e.pageY;
        }
    onMounted(()=>{
        window.addEventListener('click',getPoint)
    })

    onBeforeUnmount(()=>{
        window.removeEventListener('click',getPoint)
    })
    return point;
}
```

在要使用的文件中引入:

```js
import userPoint from "../hooks/userPoint"
export default {
    name:'Demo',
    setup(){
        let point = userPoint();
        return {point};
    }
}
```

#### toRef与toRefs

在我们实际开发过程中，我们想要把某一个通过reactive函数包装后的对象的单个属性返回出去，我们不能直接进行返回，以下是错误案例:

```vue
<template>
    <div>
        <span>姓名{{name}}</span>
        <span>年龄:{{age}}</span>
        <span>期望薪资{{salary}}</span>
    </div>
    <div>
        <button @click="salary++">增加薪资</button>
    </div>
</template>

<script>
import {reactive} from 'vue'
export default {
    name:'Demo',
    setup(){
        let person = reactive({
            name:'Eric',
            age:21,
            job:{
                type:'前端工程师',
                salary:20
            }
        })
        return {
            name:person.name,
            age:person.age,
            salary:person.job.salary
        }
    }
}
</script>
```

​	上述情况，vue抛出的并不是person的name属性，而是copy了一个值一样的新变量，所以该变量没有响应式处理。

如何解决上述问题?

##### toRef

V3为我们提供了新的引入式函数toRef，我们将上述案例改写为:

```js
import {reactive,toRef} from 'vue'
export default {
    name:'Demo',
    setup(){
        let person = reactive({
            name:'Eric',
            age:21,
            job:{
                type:'前端工程师',
                salary:20
            }
        })
        return {
            name:toRef(person,'name'),
            age:toRef(person,'age'),
            salary:toRef(person.job,'salary')
        }
    }
}
```

我们就可以正常的进行响应式了。

怎么理解toRef函数?

toRef函数就是一种适配器，将对象中的属性适配为一个响应式对象，同时保持指针指向原属性。

##### toRefs

如果我们想要将对象中的全部属性都提取出来呢？数据少可以使用toRef，但数据多呢?

V3为我们提供了另一个引入式函数，toRefs，它能够将一个对象的所有属性变为响应式，同时我们可以配合展开语法完成一个对象中全部属性的提取:

```js
import {reactive,toRefs} from 'vue'
export default {
    name:'Demo',
    setup(){
        let person = reactive({
            name:'Eric',
            age:21,
            job:{
                type:'前端工程师',
                salary:20
            }
        })
        return {
            ...toRefs(person)
        }
    }
}
```

但这种方法也有一个缺陷，那就是无法获得更深层次的对象进行响应式处理(即，对象中的某个提取属性为对象，要获取这个对象中的属性并做响应式处理)

#### shallowReactive与shallowRef

​	这两个组合式函数属于V3提供的性能优化方面的函数，与ref和reactive的区别在于这两个函数仅做一个浅监视。

​	特点shallowRef包裹的为普通类型的变量时仍然能检测到内部的改变，但是如果是对象，内部不会借助reactive进行包装响应式，而是直接将该对象存入自己的value中去。

注:用于性能优化

#### readonly与shallowReadonly

​	如果您在开发一款组件时，想要保护组件内部的某一个变量不被改变，您就可以使用readonly或shallowReadonly组合式函数进行更改。

具体用法:

```js
import {reactive,toRefs,readonly} from 'vue'
export default {
    name:'Demo',
    setup(){
        let person = reactive({
            name:'Eric',
            age:21,
            job:{
                type:'前端工程师',
                salary:20
            }
        })
        person = readonly(person);
        return {
            ...toRefs(person)
        }
    }
}
```

使用readonly函数进行包装的person对象虽然是响应式，但其所有的属性值不能被再次更改。

##### readonly与shallowReadonly的区别

shallowReadonly只能防止对象中的第一层对象无法更改，但不能防止对象中对象属性的更改。

#### toRaw与makeRaw

如果通过reactive函数定义了一个响应式对象，但你临时想奖这个响应式对象变为普通对象，你就可以使用toRaw函数，如果想要某一个对象永远不在成为响应式对象，则可以使用makeRaw:

```JS
import {reactive,toRefs,toRaw} from 'vue'
export default {
    name:'Demo',
    setup(){
        let person = reactive({
            name:'Eric',
            age:21,
            job:{
                type:'前端工程师',
                salary:20
            }
        })
        person = toRaw(person);
        return {
            ...toRefs(person)
        }
    }
}
```

makeRaw与其类似

主要用途:如果引入第三方类库，或者是结构复杂的对象，做响应式的话会浪费大量的资源，取消这些类型的响应式能够大大提高程序的性能。

注:toRaw只能用于reactive不能用于ref定义的对象

#### customRef自定义响应式

V3中为我们提供了ref的同时，也为我们提供了自定义ref的引入式函数，使用方法非常简单:

```js
import {customRef} from 'vue'
export default {
    name:'Demo',
    setup(){
       let test = myRef(0);
       function myRef(value){
           return customRef((track,trigger)=>{
               return {
                   get(){
                       track();
                       return value;
                   },
                   set(newValue){
                       value = newValue;
                       trigger();
                   }
               }
           })
       }
       return {
           test
       }
    }
}
```

使用customRef必须引入且返回customRef的对象，且对象中能够接收两个参数分别为

track追踪 ,trigger触发只有set中执行触发，vue才会重新渲染模板，只有get中执行track，才能接收重新渲染的命令并且执行。

#### 新的组件通信方式

在以往我们想要传递给子组件一些数据通常的做法是在要传递组件中添加props属性，父组件在标签上写入对应属性以及传递对应属性值，那么我们的子组件就可以通过props接收到，不过这种传递方式不适用与祖孙之间的传递。

所以V3为我们提供了全系的组件通信方式:provide(提供者)、inject(注入)

使用方法：在祖组件中使用组合式函数provide将要传递的参数放入(注:需要提供一个名称和具体传入的数据。)，在孙组件中引入inject指定要注入那个传入的数据。

传递数据:

```js
import {reactive,provide,toRefs} from 'vue'
export default {
    name:'App',
    setup(){
        let car = reactive({
            name:'雪佛兰',
            price:'40w'
        })
        provide('car',car);
        return {...toRefs(car)}
    },
    components:{Child}
}
```

接收(注入)数据:

```js
import { inject } from "vue"
export default {
    name:'Son',
    setup(){
        let car = inject('car');
        return {car}
    }
}
```

#### Teleport瞬间移动

以往我们添加的子组件都是嵌套在父组件的标签中，如果我们想要做一些弹窗效果，则定位就显得颇为麻烦，在V3中提供了全新的组件Teleport，使用该组件可以将组件传送到任意位置:

```vue
<template>
    <div class="son">
        <span>{{car.name}}---{{car.price}}</span>
        <span>Son组件</span>
        <teleport to='body'>
            <span>在Body标签中</span>
        </teleport>
    </div>
</template>
```

![image-20211226100916293](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211226100916293.png)

#### 异步加载组件*Suspense*

​	在V2时期，我们想要异步的加载一些数据(如:向后台获取一些数据，但由于网速慢，加载较慢，导致整个网页渲染慢)处理方式稍微麻烦(我的解决方案是通过v-if和promise配合)。

V3提供了一个异步加载组件的方法:

```js
import {defineAsyncComponent} from 'vue'
let Son = defineAsyncComponent(()=>import('./Son.vue'))
```

Suspense使用方法:

它提供了两个插槽，一个是要显示的数据default，以及加载慢时显示的页面fallback(例如:骨架屏、loading)

```vue
        <Suspense>
            <template v-slot:default>
                <Son></Son>
            </template>
            <template v-slot:fallback>
                <span>正在加载</span>
            </template>
        </Suspense>
```

​	此时的setup函数可以是一个异步函数(async)，同时可以使用await以及promise相互协调进行异步加载。
