<template>
  <div
    class="mx-3 cursor-pointer"
    @click="gotoPage()"
  >
    <span
      class="nav-tab"
      :title="tab?.name"
    >
      {{tab?.name}}
    </span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    tab: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    let router = useRouter();
    function gotoPage() {
      router.push(props.tab.key);
    }
    
    return { gotoPage };
  },
});
</script>

<style>
.nav-tab {
  transition: 0.3s;
  @apply text-gray-600 hover:text-gray-900;
}
</style>