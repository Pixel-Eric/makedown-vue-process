<template>
  <div class="root">
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
export default defineComponent({
  components: {
    NavBar,
  },
});
</script>