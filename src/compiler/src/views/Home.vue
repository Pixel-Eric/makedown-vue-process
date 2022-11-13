<template>

</template>

<script>
import {
  defineComponent,
  ref,
  onMounted,
  reactive,
  toRefs,
  watchEffect,
} from "vue";
import { typewriter } from "../../hooks/typewriter";

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

<style scoped>
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