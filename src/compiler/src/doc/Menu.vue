<template>
  <div class="menu-list">
    <tree-list
      v-for="(menuInfo,index) in _menuList"
      :key="index"
      :item="menuInfo"
      :layout="1"
    />
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { _menuList } from "../../data";
export default defineComponent({
  setup() {
    return { _menuList };
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