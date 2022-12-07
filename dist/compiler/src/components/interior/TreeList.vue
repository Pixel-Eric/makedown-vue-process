<template>
  <ul
    :class="[`menu-ul-${layout}`]"
    :id="item.title"
  >
    <li class="item">
      <a
        v-if="layout !== 1"
      >
        <span :class="{'active-option':active}">
          {{item.title}}
        </span>
      </a>
      <span
        v-else
        :class="{'active-option':active}"
        @click="optionClick()"
      >
        {{item.title}}
      </span>
      <template v-if="active">
        <tree-list
          v-for="child in item.children"
          :key="child.title"
          :item="child"
          :layout="layout+1"
          :active="activeChildName === child.title"
          :parentName="item.title"
        />
      </template>
    </li>
  </ul>
</template>

<script>
import { defineComponent, inject, toRefs, provide, reactive } from "vue";
import { useRouter } from "vue-router";

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
    active: {
      type: Boolean,
      default: false,
    },
    parentName: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const router = useRouter();
    let state = reactive({
      activeChildName: "",
    });
    let activeOption = inject("activeOption");
    let activeChild;
    if (props.layout === 1) {
      activeChild = function (name) {
        state.activeChildName = name;
      };
      provide("activeChild", activeChild);
    } else {
      activeChild = inject("activeChild");
    }

    function Jump() {
      if (props.parentName === "") {
        router.push(`/${props.item.title}`);
      }
    }

    function optionClick() {
      if (props.layout === 1) {
        activeOption(props.layout, props.item.title);
      } else {
        activeChild(props.item.title);
      }
    }
    return { optionClick, ...toRefs(state), Jump };
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

.menu-ul-2 > li > a > span {
  transition: 0.3s;
  @apply text-base text-gray-400 cursor-pointer pl-3
    hover:text-gray-800;
}
.active-option {
  @apply text-green-600 !important;
}
</style>