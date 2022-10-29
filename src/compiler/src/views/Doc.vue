<template>
  <div
    id="doc"
    class="doc"
  >
    <Menu></Menu>
    <Content></Content>
  </div>
</template>

<script>
import Menu from "../doc/Menu.vue";
import Content from "../components/Content.vue";
export default {
  components: {
    Menu: Menu,
    Content: Content,
  },
};
</script>