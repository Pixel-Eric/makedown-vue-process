<template>
  <div
    v-if="hasPage"
    :id="title"
  >
    <item-menu :tabs="tabs">
    </item-menu>
  </div>
  <not-found v-else />
</template>

<script>
import { _tabs } from "../../data";
import { reactive, toRefs } from "vue";
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
  setup() {
    let state = reactive({
      hasPage: true,
      tabs: {},
    });

    return { ...toRefs(state) };
  },
  beforeCreate() {
    let _pageIndex = _tabs.findIndex((tab) => {
      return tab?.key === this.title;
    });
    if (_pageIndex === -1) {
      this.hasPage = false;
    } else {
      let _fileName = _tabs[_pageIndex].key + ".json";
      import("../../data/tab/" + _fileName).then((res) => {

        this.tabs = [res[0]];
        console.log(this.tabs);
        
      });
    }
  },
};
</script>

<style>
</style>