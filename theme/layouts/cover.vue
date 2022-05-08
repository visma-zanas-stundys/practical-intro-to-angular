<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../layoutHelper";

const props = defineProps({
  background: {
    default: "",
  },
  backgroundPositionX: {
    default: "",
  },
  large: {
    default: false,
  },
});

const style = computed(() =>
  handleBackground(props.background, props.backgroundPositionX)
);
</script>

<template>
  <div
    class="slidev-layout cover"
    :style="style"
    :class="{ large: props.large }"
  >
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>

<style></style>
