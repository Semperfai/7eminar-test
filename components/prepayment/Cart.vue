<script setup lang="ts">
const DISCOUNT_PERCENT = 63;

const props = defineProps<{
  hit?: boolean;
  hitText?: string;
  title?: string;
  subtitle?: string;
  discount: string;
  price: number;
  paymentMethod?: string;
}>();

const { hit, title, discount, price, hitText, paymentMethod } = toRefs(props);

const discountPrice = computed(() => {
  return Math.floor(price.value * (DISCOUNT_PERCENT / 100));
});
</script>
<template>
  <div class="flex flex-col justify-center items- min-w-[255px] max-w-xs">
    <div
      class="w-full h-[26px] flex items-center justify-center mb-4 bg-yellow-2 rounded-t-lg"
      v-if="hit"
    >
      <div class="flex gap-3 items-center justify-center">
        <BaseIconsDirection />
        <p v-if="hitText" class="font-raleway text-[13px] font-bold">{{ hitText }}</p>
        <BaseIconsDirection />
      </div>
    </div>
    <div>
      <div
        class="mb-3 flex items-center justify-center gap-[10px] font-raleway font-extrabold text-[13px] text-center"
        v-if="title"
      >
        {{ title }}
        <div class="font-inter w-[34px] leading-8 bg-primary-1 rounded-full text-[10px] text-white">
          {{ discount }}
        </div>
      </div>
      <p
        class="leading-normal mb-2 font-normal text-[13px] text-center m-auto max-w-[250px] min-h-[3em]"
        v-if="subtitle"
      >
        {{ subtitle }}
      </p>
      <div class="mb-3">
        <div class="flex items-center justify-center gap-7">
          <div>
            <p
              :class="[!title && discount ? 'text-left' : 'text-center']"
              class="font-normal text-[13px] text-gray-400 line-through"
            >
              {{ price }} грн/міс.
            </p>
            <p class="font-bold text-center text-[17px]">{{ discountPrice }} грн/міс.</p>
          </div>
          <div
            v-if="!title && discount"
            class="font-inter text-center w-[34px] leading-8 bg-primary-1 rounded-full text-[10px] text-white"
          >
            {{ discount }}
          </div>
        </div>
      </div>
      <slot name="action"></slot>
      <a
        href="##"
        class="block font-raleway text-center underline font-normal text-[13px] text-gray-400"
      >
        {{ paymentMethod }}
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
