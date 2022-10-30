<template>
  <div class="home">
    <div class="flex justify-center items-center pt-24 select-none">
      <span class="md-process">MakeDown Process</span>
      <div class="border-box">
        <span class="vue animate-pulse">Vue</span>
      </div>
    </div>
    <div class="flex justify-center select-none">
      <span class="text-2xl font-bold text-black py-4">
        无需任何代码，快速构建基于Vue的现代化Web文档
      </span>
    </div>
    <div class="flex justify-center select-none py-8">
      <button class="start rounded-lg text-white font-bold text-lg px-4 py-2 ">
        开始学习
      </button>
      <button class="install ml-4 rounded-lg text-white font-bold text-lg px-4 py-2 ">
        开始
      </button>
    </div>
    <div class="flex flex-col items-center select-none py-4">
      <span class="font-bold text-gray-500 text-2xl py-5">Why is MakeDown Process?</span>
      <div class="flex justify-center">
        <card>
          <template #title>
            无需代码
          </template>
          <template #content>
            编译一切任何你想编译的文档,仅仅需要编写MakeDown文件,既可以实现编译为Web.
          </template>
        </card>
        <card>
          <template #title>
            定制化
          </template>
          <template #content>
            MakeDown Process支持动态皮肤设置，同时支持自定义文档编译颜色.
          </template>
        </card>
        <card>
          <template #title>
            更快速
          </template>
          <template #content>
            基于Vue3、Webpack5、Tw、Less构建您的Web，减少冗余代码.
          </template>
        </card>
        <card>
          <template #title>
            更高效
          </template>
          <template #content>
            减少不必要的学习内容，仅5分钟即可上手.
          </template>
        </card>
      </div>
    </div>
  </div>
  <div class="features">
    
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.install {
  transition: 0.3s;
  background: rgb(239, 237, 237);
  color: #666;
}
.install:hover {
  background: rgb(211, 208, 208);
}
.start {
  background-color: #578aef;
  transition: 0.3s;
}
.start:hover {
  background-color: #4974ca;
}
.md-process {
  background-image: linear-gradient(90deg, #8f41e9, #578aef);
  @apply ml-2 bg-clip-text text-transparent font-bold text-7xl flex justify-center;
}
.border-box {
  border: solid 1px transparent;
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  @apply h-full self-center;
}
.vue {
  background-image: linear-gradient(90deg, #489b45, #14bf3c);
  @apply ml-2 bg-clip-text text-transparent font-bold text-2xl;
}
</style>