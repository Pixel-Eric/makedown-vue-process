<template>
  <component :is="getHome()" />
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  setup() {
    function getHome() {
      return defineAsyncComponent(() => import("../../../../data/index.vue"));
    }
    return { getHome };
  },
});
</script>


<style>
</style>