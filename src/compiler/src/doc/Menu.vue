<template>
  <div class="menu-list">
    <tree-list
      v-for="(menuInfo,index) in tabs"
      :key="index"
      :item="menuInfo"
      :layout="1"
      :active="active === menuInfo.title"
    />
  </div>
</template>

<script >
import { defineComponent, reactive, toRefs, provide, onMounted } from "vue";
export default defineComponent({
  props: {
    activeName: {
      type: String,
      default: "",
    },
    tabs: {
      type: Object,
      default: () => {},
    },
  },
  setup({ activeName }) {
    let state = reactive({
      active: "",
    });
    function activeOption(layout, optionName) {
      if (layout === 1) {
        state.active = optionName;
      }
    }

    onMounted(() => {
      state.active = activeName;
    });

    provide("activeOption", activeOption);
    return { ...toRefs(state) };
  },
});
</script>

<style scoped>
.menu-list {
  width: 240px;
  height: 100%;
  overflow: scroll;
  overflow-x: auto;
  overflow-y: auto;
  border-right: solid 1px;
  @apply border-gray-600 border-opacity-20;
}
</style>