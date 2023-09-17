<script setup lang="ts">
const props = defineProps<{
  titleInfo: string;
  subtitleInfo: string;
  subtitleTextInfo: string;
  infoItems: { id: number; title: string; description: string }[];
}>();
</script>
<template>
  <div>
    <h3 class="font-eukraine text-base font-bold max-w-[400px] mb-6">
      {{ titleInfo }}
    </h3>
    <div class="grid grid-cols-2 grid-rows-2 mb-5">
      <div v-for="item in infoItems" :key="item.id">
        <div class="font-eukraine text-[63px] leading-normal font-bold text-primary-1 mb-4">
          {{ item.title }}
        </div>
        <p class="font-raleway text-[17px] text-normal">
          {{ item.description }}
        </p>
      </div>
    </div>
    <h4 class="font-raleway text-4xl font-bold text-primary-1 mb-2">{{ subtitleInfo }}</h4>
    <p class="font-raleway text-[17px] text-normal">{{ subtitleTextInfo }}</p>
  </div>
</template>
