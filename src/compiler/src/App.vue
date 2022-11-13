<template>
  <div class="root">
    <nav-bar></nav-bar>
    <div class="">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "./components/interior/NavBar.vue";
export default defineComponent({
  components: {
    NavBar,
  },
});
</script>