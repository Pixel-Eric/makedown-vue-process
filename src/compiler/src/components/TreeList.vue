<template>
  <ul
    :class="[`menu-ul-${layout}`]"
    :id="item.title"
  >
    <li class="item">
      <span>{{item.title}}</span>
      <tree-list
        v-for="child in item.children"
        :key="child.title"
        :item="child"
        :layout="layout+1"
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
    layout: {
      type: Number,
      default: 1,
    },
  },
});
</script>

<style>
.menu-ul-1 > li > span {
  transition: 0.3s;
  height: 100%;
  @apply text-lg text-gray-400 cursor-pointer
    hover:text-gray-800;
}

.menu-ul-2 > li > span {
  transition: 0.3s;
  @apply text-base text-gray-400 cursor-pointer pl-3
    hover:text-gray-800;
}
</style>