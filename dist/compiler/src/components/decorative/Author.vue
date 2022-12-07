<template>
  <div class="author shadow-lg box relative flex flex-col items-center justify-top shadow-gray-600 w-full rounded-lg bg-white h-2/3">
    <img
      class="left-10 absolute rounded-full w-28 h-28 top-0 -translate-y-12 shadow-gray-500 shadow-md"
      src="../../../assets/bg.png"
    />

    <div class="font-bold overflow-hidden text-lg mx-4 h-full flex-col flex justify-center items-center">
      <p class="author-name text-2xl">
        <slot name="name">{{name}}</slot>
      </p>
      <p>
        <slot name="content">
          {{content}}
        </slot>
      </p>
      <div>
        <img
          :title="`${name}'s GitHub`"
          @click="linkGitHub"
          class="w-10 h-10 absolute bottom-4 cursor-pointer"
          src="../../../assets/GitHub-Mark-64px.png"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, toRefs, reactive } from "@vue/runtime-core";

export default defineComponent({
  props: {
    name: { type: String, default: "" },
    gitHub: {
      type: String,
      default: "",
    },
    content: { type: String, default: "" },
  },
  setup(props) {
    let state = reactive({
      showGit: false,
    });

    function linkGitHub() {
      window.open(props.gitHub);
    }

    if (props.gitHub?.length > 0) {
      state.showGit = true;
    }

    return { ...toRefs(state), linkGitHub };
  },
});
</script>

<style>
</style>