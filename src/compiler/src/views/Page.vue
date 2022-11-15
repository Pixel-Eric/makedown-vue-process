<template>
  <div
    class="flex h-full"
    v-if="hasPage"
    :id="title"
  >
    <item-menu :tabs="tabs">
    </item-menu>
    <div class="p-5 content">
      <component :is="getComponent()" />
    </div>
  </div>
  <not-found v-else />
</template>

<script>
import { _tabs } from "../../data";
import { reactive, toRefs, defineAsyncComponent } from "vue";
import NotFound from "./NotFound.vue";
import Menu from "../doc/Menu.vue";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  components: {
    "not-found": NotFound,
    "item-menu": Menu,
  },
  setup(props) {
    let state = reactive({
      hasPage: true,
      tabs: {},
    });

    function getComponent() {
      return defineAsyncComponent(() =>
        import("../../../../data/content/" + props.title + ".vue")
      );
    }

    return { ...toRefs(state), getComponent };
  },
  beforeCreate() {
    let _pageIndex = _tabs.findIndex((tab) => {
      return tab?.key === this.title;
    });
    if (_pageIndex === -1) {
      this.hasPage = false;
    } else {
      let _fileName = _tabs[_pageIndex].key + ".json";
      import("../../../../data/tab/" + _fileName).then((res) => {
        this.tabs = [res[0]];
        console.log(this.tabs);
      });
    }
  },
};
</script>

<style scoped>
.content {
  margin-left: 240px;
  border-left: solid 1px;
  @apply border-gray-600 border-opacity-20;
}
</style>