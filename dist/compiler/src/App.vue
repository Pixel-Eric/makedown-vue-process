<template>
  <div class="root">
    <nav-bar></nav-bar>
    <div class="flex-1">
      <router-view :key="route.fullPath" />
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import NavBar from "./components/interior/NavBar.vue";
export default defineComponent({
  components: {
    NavBar,
  },
  setup() {
    let route = useRoute();

    return { route };
  },
});
</script>