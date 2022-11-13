<template>
  <div class="flex flex-1 flex-col item-center">
    <a href="#前提准备">前提准备</a>
    <div class=" mb-32">
      <a name="什么是nodejs">什么是nodejs</a>
      <div class="t bg-red-400"></div>
    </div>
    <div class="mt-32 mb-32">
      <a name="前提准备">前提准备</a>
      <div class="t bg-teal-400"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  setup(props) {
    let state = reactive({
      componentName: "",
    });

    state.componentName = props.curPageName;

    return { ...toRefs(state) };
  },
});
</script>

<style scoped>
.t {
  height: 1500px;
}
</style>