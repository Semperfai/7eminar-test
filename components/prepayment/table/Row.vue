<script setup lang="ts">
interface Props {
  text: {
    main: string;
    important?: string;
    optinal?: string;
  };
  new: boolean;
  rate_one: boolean;
  rate_two: boolean;
}
const props = defineProps<Props>();
</script>
<template>
  <div class="text-left font-raleway text-base font-medium">
   
    <p class="text-[15px] font-raleway leading-snug">
       <span
      class="inline-flex justify-center rounded-sm w-12 leading-[18px] font-raleway font-semibold text-[15px] text-white bg-primary-1"
      v-if="new"
    >
      NEW
    </span>
      {{ text.main }}</p>
    <p v-if="text.optinal" class="text-[15px] font-raleway leading-snug text-primary-1 font-medium">
      {{ text.optinal }}
    </p>
    <p v-if="text.important" class="text-[15px] font-raleway leading-snug text-primary-1 font-bold">
      {{ text.important }}
    </p>
  </div>
  <div class="text-center">
    <Icon :name="rate_one ? 'fluent-mdl2:accept-medium' : 'mdi:close'" size="16" />
  </div>
  <div class="text-center">
    <Icon :name="rate_two ? 'fluent-mdl2:accept-medium' : 'mdi:close'" size="16" />
  </div>
</template>
