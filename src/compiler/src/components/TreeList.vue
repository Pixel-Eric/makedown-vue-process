<template>
  <ul :id="item.title">
    <li class="item">
      <span>{{item.title}}</span>
      <tree-list
        v-for="child in item.children"
        :key="child.title"
        :item="child"
      />
    </li>
  </ul>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: {},
    },
  },
});
</script>

<style>
</style>