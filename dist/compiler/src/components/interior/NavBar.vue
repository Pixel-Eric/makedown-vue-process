<template>
  <div class="navbar">
    <div class="navbar-left">
      <img
        src="../../../assets/md.png"
        class="doc-icon"
        :draggable="false"
      >
      <span
        class="doc-title cursor-pointer"
        :draggable="false"
        @click="goHome()"
        :title="_header?.name"
      >
        {{_header?.name}}
      </span>
      <div class="flex items-end">
        <span
          :title="mouseTitle()"
          class="doc-code"
        >
          {{_header.version}}
        </span>
        <div
          :title="mouseTitle()"
          class="border-box"
        >
          <span class="doc-version">
            {{_header.tag}}
          </span>
        </div>
      </div>
    </div>
    <div class="navbar-center flex items-center">
      <span class="text-gray-400 cursor-pointer px-4 ml-3 hover:text-gray-600">
        快速检索文档
      </span>
      <div class="search-key hover:border-blue-500 hover:text-blue-500 cursor-pointer hover:text-gray-800 rounded px-1 text-xs py-1 text-gray-500 text-sm border-gray-400">
        Ctrl + K
      </div>
    </div>
    <div class="navbar-right ml-auto px-4 flex select-none">
      <tab
        v-for="(tab,index) in _tabs"
        :tab="tab"
        :key="index"
      />
    </div>
  </div>
</template>


<script>
import { defineComponent } from "vue";
import { _header, _tabs } from "../../../data";
import Tab from "./Tab.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    tab: Tab,
  },
  setup() {
    let router = useRouter();

    function mouseTitle() {
      return _header.version + _header.tag;
    }

    function goHome() {
      router.push("/");
    }

    return {
      mouseTitle,
      goHome,
      _header,
      _tabs,
    };
  },
});
</script>

<style scoped>
.search-key {
  transition: 0.3s;
  border: solid 1px;
}

.navbar-right > span,
.navbar-right > img {
  cursor: pointer;
  margin: 0 1em;
}
.navbar-left {
  @apply flex items-center;
}
.doc-version {
  border: solid 1px;
  border-color: transparent;
  border-radius: 10px;
  color: transparent;
  background-image: linear-gradient(90deg, #8f41e9, #578aef);
  background-clip: text;
  font-size: 8px;
  padding: 1px 4px;
}
.doc-code {
  font-size: 8px;
  color: transparent;
  background-image: linear-gradient(90deg, #8f41e9, #578aef);
  background-clip: text;
  user-select: none;
  font-weight: bold;
}
.doc-title {
  color: transparent;
  background-image: linear-gradient(45deg, #8f41e9, #578aef);
  background-clip: text;
  @apply px-2 text-xl  font-bold select-none;
}
.border-box {
  margin-left: 4px;
  border: 1px solid transparent;
  box-sizing: border-box;
  height: 20px;
  display: flex;
  align-items: center;
  user-select: none;
  border-radius: 3px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, #fff, #fff),
    linear-gradient(90deg, #8f41e9, #578aef);
}
.navbar {
  border-bottom: solid 1px;
  @apply py-3 flex items-center z-50 bg-white border-gray-300 mx-4;
}
.doc-icon {
  @apply w-8 h-8 select-none cursor-no-drop cursor-default;
}
</style>