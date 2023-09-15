<template>
  <a
    v-if="link"
    :href="to"
    class="font-raleway text-[17px] rounded-full font-bold flex items-center justify-center transition-colors duration-200 ease-in-out"
    :class="[
      type === 'primary' ? 'bg-primary-1  hover:bg-primary-2 text-white' : '',
      size === 'small' ? ' h-[52px]  px-12 ' : '',
      size === 'large' ? 'h-[56px] px-8 ' : '',
    ]"
    >{{ text }}</a
  >
  <button
    v-else
    class="flex items-center justify-center rounded transition-colors duration-200 ease-in-out"
    :class="[
      type === 'primary'
        ? 'bg-primary-1 text-green-dark hover:bg-primary-2'
        : '',
      size === 'small' ? 'h-8 px-4 text-xs' : '',
      size === 'large' ? 'h-9 px-10 text-base' : '',
    ]"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  type: {
    type: String as PropType<"primary">,
    default: "primary",
  },
  size: {
    type: String as PropType<"small" | "large">,
    default: "small",
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: "",
  },
});
</script>
