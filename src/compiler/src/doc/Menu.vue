<template>
  <div class="menu-list">
    <tree-list
      v-for="(menuInfo,index) in _menuList"
      :key="index"
      :item="menuInfo"
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
    
  }
</style>