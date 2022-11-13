<template>
  <div
    id="doc"
    class="doc"
  >
    <Menu :active-name="title"></Menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "../doc/Menu.vue";
import Content from "../components/Content.vue";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  components: {
    Menu: Menu,
    Content: Content,
  },
};
</script>