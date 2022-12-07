<template>
  <div
    ref="introduce"
    class="introduce relative w-full justify-center h-full"
    @scroll="scrollHandler"
  >
    <div
      id="home"
      ref="home"
      class="home cursor-show top-0 w-full h-full flex flex-col items-center justify-center"
    >
      <div class="flex justify-center items-center select-none">
        <span class="md-process">MakeDown Process</span>
        <div class="border-box">
          <span class="vue animate-pulse">Vue</span>
        </div>
      </div>
      <div class="code-editor mt-2 sticky w-full flex flex-col items-center">
        <div class="rounded-md overflow-hidden bg-blue-500 w-9/12 -z-10">
          <div class=" h-14 bg-black/70 shadow-md shadow-black/40">
            <div class="flex justify-evenly w-32 h-full items-center">
              <div class=" rounded-full bg-red-600 w-6 h-6 text-white flex justify-center items-center">
              </div>
              <div class=" rounded-full bg-yellow-400 w-6 h-6 text-white flex justify-center items-center">
              </div>
              <div class=" rounded-full bg-green-400 w-6 h-6 text-white flex justify-center items-center">
              </div>
            </div>
          </div>
          <div class="bg-black/70 h-full flex ">
            <div class="w-64 text-white/80 shadow bg-white/10 h-full">
              <ul>
                <li class="pl-4 py-5 bg-white/10">StratDoc.md</li>
                <li class="pl-4 py-5 ">Frist.md</li>
                <li class="pl-4 py-5 ">Second.md</li>
              </ul>
            </div>
            <div class="code-editor-content text-white/80 flex-1 py-10 px-4">
              <div>
                <p
                  id="md-title"
                  ref="mdTitle"
                  class="text-5xl w-auto inline"
                >
                </p>
              </div>
              <div>
                <p
                  id="md-first-p"
                  ref="mdFirstP"
                  class="w-auto inline"
                >
                </p>
              </div>
              <div>
                <p
                  id="md-second-p"
                  ref="mdSecondP"
                  class="w-auto inline"
                >
                </p>
              </div>
              <div
                v-if="showTag"
                class="tag flex rounded my-3 py-10 bg-white justify-center items-center select-none"
              >
                <span class="md-process">MakeDown Process</span>
                <div class="border-box">
                  <span class="vue animate-pulse">Vue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center select-none">
        <span class="text-2xl font-bold text-gray-600 py-4">
          Quickly build modern Vue documentation without any code
        </span>
      </div>
      <div class="flex justify-center select-none py-8">
        <button class="button">
          Start Learning
        </button>
        <button class="button ">
          GitHub
        </button>
      </div>
      <!-- <div class="w-full absolute bottom-2 flex justify-center mt-16 animate-bounce">
      <img
        src="../../assets/svg/next.svg"
        title="Next"
        class="w-10 h-10 cursor-pointer"
      >
    </div> -->
    </div>
    <div class="test w-full h-full bg-white/90">
      <div class="w-full h-full flex box-border justify-center items-center">
        <div class="feature relative w-1/2 rounded-lg bg-red-600 h-2/3">
          <div class="bg-red-400 w-full rounded-lg h-full absolute bottom-5 left-5">

          </div>
        </div>
        <div class="h-1/3 w-1/4 ml-10">
          <author
            gitHub="https://github.com/Pixel-Eric"
            name="Eric"
          >
            <template #content>
              "MDP可以在无需任何代码的情况下，快速构建具有出色效果的在线文档."
            </template>
          </author>
        </div>
      </div>
    </div>
    <div class="w-full h-full flex justify-center items-center">
      <div class="h-1/3 w-1/4 mr-10">
        <author gitHub="https://github.com/Pixel-Eric">
          <template #content>
            "除此之外MDP 拥有丰富的文档组件，帮组你在定制文档时更加得心应手。"
          </template>
        </author>
      </div>
      <div class="feature relative w-1/2 rounded-lg bg-red-600 h-2/3">
        <div class="bg-red-400 w-full rounded-lg h-full absolute bottom-5 right-5">

        </div>
      </div>
    </div>
    <div class="w-full h-full">
      <div class="w-full h-full flex box-border justify-center items-center">
        <div class="feature relative w-1/2 rounded-lg bg-red-600 h-2/3">
          <div class="bg-red-400 w-full rounded-lg h-full absolute bottom-5 left-5">

          </div>
        </div>
        <div class="h-1/3 w-1/4 ml-10">
          <author
            gitHub="https://github.com/Pixel-Eric"
            name="Eric"
          >
            <template #content>
              "得益于使用了TailwindCSS,您可以快速定制现代化CSS"
            </template>
          </author>
        </div>
      </div>
    </div>
    <div class="w-full h-1/4 flex justify-center mx-20">
      <div class="w-4/5 flex justify-evenly items-center border-b-2 border-gray-600/30">
        <div class="flex flex-col">
          <span class="font-bold text-lg">入门</span>
          <ul>
            <li class="py-2">安装</li>
            <li class="py-2">如何配置</li>
            <li class="py-2">使用Vue自定义页面</li>
            <li class="py-2">生产优化</li>
          </ul>
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-lg">概念</span>
          <ul>
            <li class="py-2">安装</li>
            <li class="py-2">如何配置</li>
            <li class="py-2">使用Vue自定义页面</li>
            <li class="py-2">生产优化</li>
          </ul>
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-lg">入门</span>
          <ul>
            <li class="py-2">安装</li>
            <li class="py-2">如何配置</li>
            <li class="py-2">使用Vue自定义页面</li>
            <li class="py-2">生产优化</li>
          </ul>
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-lg">入门</span>
          <ul>
            <li class="py-2">安装</li>
            <li class="py-2">如何配置</li>
            <li class="py-2">使用Vue自定义页面</li>
            <li class="py-2">生产优化</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-full h-1/5 flex justify-center items-center">
      <div class="w-4/5">
        <p class="text-2xl font-bold">MakeDown Process</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, onMounted } from "vue";

export default defineComponent({
  setup() {
    // DOM list
    let home = ref(null);
    let mdTitle = ref(null);
    let mdFirstP = ref(null);
    let mdSecondP = ref(null);

    // State
    let state = reactive({
      title: "This is my first document",
      mdfirstP:
        " I'm going to document it as an article on my blog, but programming is so annoying to me that I need a tool.",
      mdsecondP:
        "I learned about 'MakerDown Process Vue' and it's really handy.",
      showTag: false,
      showFeature: false,
    });

    function homeAnimationStart() {
      typewriter(mdTitle.value, state.title, () => {
        typewriter(mdFirstP.value, state.mdfirstP, () => {
          typewriter(mdSecondP.value, state.mdsecondP, () => {
            state.showTag = true;
            // Remove animation event listener.
            home.value.removeEventListener("animationend", homeAnimationStart);
          });
        });
      });
    }

    function scrollHandler(e) {
      let scrollTop = e.target.scrollTop;
      let viewHeight = document.body.clientHeight - 30;
      if (scrollTop >= viewHeight) {
        state.showFeature = true;
      }
    }

    onMounted(() => {
      home.value.addEventListener("animationend", homeAnimationStart);
    });
    return {
      home,
      scrollHandler,
      mdTitle,
      mdFirstP,
      mdSecondP,
      ...toRefs(state),
    };
  },
});
</script>
<style>
.code-editor-content {
  min-height: 420px;
}
.home,
.feature {
  animation: entry 1.5s;
}
.tag {
  animation: showTag 1s;
}

.leave-class {
  animation: leave 1.5s reverse;
}

@keyframes showTag {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes leave {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    top: 0px;
  }
}

@keyframes entry {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    top: 0px;
  }
}
.button {
  transition: 0.5s;
  @apply rounded-lg text-indigo-500 font-bold text-lg px-12 py-3 border-solid border-2 mx-3 border-indigo-400
  hover:text-indigo-600 hover:border-indigo-800;
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