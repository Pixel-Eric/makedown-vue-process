<template>
  <div class="card p-2 rounded-md hover:bg-gray-100 mx-2">
    <span class="text-lg text-slate-500 font-bold px-2 py-1">
      <slot name="title">
        {{title}}
      </slot>
    </span>
    <div class="card-content text-gray-500 px-2 indent-2">
      <slot name="content">
        {{content}}
      </slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
});
</script>

<style>
.card {
  transition: 0.3s;
  cursor: pointer;
  max-width: 240px;
  height: 120px;
  @apply truncate;
}
.card-content {
  width: 100%;
  white-space: normal;
  height: 100%;
}
</style>