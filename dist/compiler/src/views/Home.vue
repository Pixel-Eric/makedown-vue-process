<template>
  <component :is="getIndexHTML()" />
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  setup() {
    function getIndexHTML() {
      return defineAsyncComponent(() => import("../../../../data/index.vue"));
    }
    return { getIndexHTML };
  },
});
</script>


<style>
</style>