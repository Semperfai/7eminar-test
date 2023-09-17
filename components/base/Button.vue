<template>
  <a
    v-if="link"
    :href="to"
    class="font-raleway shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[17px] rounded-full font-bold flex items-center justify-center transition-colors duration-200 ease-in-out"
    :class="[
      type === 'primary' ? 'bg-primary-1  hover:bg-primary-2 text-white' : '',
      size === 'small' ? ' h-[52px]  px-12 ' : '',
      size === 'large' ? 'h-[56px] px-8 ' : '',
    ]"
    >{{ text }}</a
  >
  <button
    v-else
    :disabled="submitDisabled"
    class="font-raleway shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] text-[17px] rounded-full font-bold flex items-center justify-center transition-colors duration-200 ease-in-out"
    :class="[
      type === 'primary' ? 'bg-primary-1 hover:bg-primary-2 text-white' : '',
      size === 'small' ? ' h-[52px] px-12 ' : '',
      size === 'large' ? 'h-[56px] px-8 ' : '',
      submitDisabled ? ' bg-blue-200 hover:bg-blue-300' : 'bg-primary-1',
    ]"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  submitDisabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<'primary'>,
    default: 'primary',
  },
  size: {
    type: String as PropType<'small' | 'large'>,
    default: 'small',
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
    default: '',
  },
});
</script>
