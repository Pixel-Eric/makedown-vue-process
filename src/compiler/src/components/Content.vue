<template>
  <div class="flex flex-1 flex-col justify-center">
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