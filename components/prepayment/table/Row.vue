<script setup lang="ts">
interface Props {
  content: {
    text: {
      main: string;
      important?: string;
      optinal?: string;
    };
    new: boolean;
    rate_one: boolean;
    rate_two: boolean;
  };
}

const props = defineProps<Props>();
</script>
<template>
  <div class="flex justify-between items-center">
    <div class="text-left font-raleway text-base font-medium">
      <div
        class="inline-flex w-12 leading-[18px] font-raleway font-semibold text-[15px] text-white bg-primary-1"
        v-if="content.new"
      >
        NEW
      </div>
      <p class="text-[15px] font-raleway leading-snug">{{ content.text.main }}</p>
      <p
        v-if="content.text.optinal"
        class="text-[15px] font-raleway leading-snug text-primary-1 font-medium"
      >
        {{ content.text.optinal }}
      </p>
      <p
        v-if="content.text.important"
        class="text-[15px] font-raleway leading-snug text-primary-1 font-bold"
      >
        {{ content.text.important }}
      </p>
    </div>
    <div>
      <Icon :name="content.rate_one ? 'fluent-mdl2:accept-medium' : 'mdi:close'" size="16" />
    </div>
    <div>
      <Icon :name="content.rate_two ? 'fluent-mdl2:accept-medium' : 'mdi:close'" size="16" />
    </div>
  </div>
</template>
