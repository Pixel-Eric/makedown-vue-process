<template>

</template>

<style scoped>
.code-editor-content {
  min-height: 420px;
}
.home,
.feature {
  animation: entry 1.5s;
}
.tag {
  animation: showTag 1s;
}

.leave-class {
  animation: leave 1.5s reverse;
}

@keyframes showTag {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes leave {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    top: 0px;
  }
}

@keyframes entry {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    top: 0px;
  }
}
.button {
  transition: 0.5s;
  @apply rounded-lg text-indigo-500 font-bold text-lg px-12 py-3 border-solid border-2 mx-3 border-indigo-400
  hover:text-indigo-600 hover:border-indigo-800;
}
.md-process {
  background-image: linear-gradient(90deg, #8f41e9, #578aef);
  @apply ml-2 bg-clip-text text-transparent font-bold text-7xl flex justify-center;
}
.border-box {
  border: solid 1px transparent;
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  @apply h-full self-center;
}
.vue {
  background-image: linear-gradient(90deg, #489b45, #14bf3c);
  @apply ml-2 bg-clip-text text-transparent font-bold text-2xl;
}
</style>