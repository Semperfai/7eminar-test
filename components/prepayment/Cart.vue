<script setup lang="ts">
const props = defineProps<
  Partial<{
    hit: boolean
    hitText: string
    title: string
    subtitle: string
    discount: number
    price: number
  }>
>()

const { hit, title, discount, price, hitText } = toRefs(props)

const discountPrice = computed(() => {
  if (discount?.value && price?.value) {
    return price.value - (price.value * discount.value) / 100
  }
})
</script>
<template>
  <div class="flex flex-col justify-center items- min-w-[255px]">
    <div
      class="w-full h-[26px] flex items-center justify-center mb-4 bg-yellow-2 rounded-t-lg"
      v-if="hit">
      <div class="flex gap-3 items-center justify-center">
        <BaseIconsDirection />
        <p class="font-raleway text-[13px] font-bold">{{ hitText }}</p>
        <BaseIconsDirection />
      </div>
    </div>
    <div>
      <p class="flex items-center justify-center gap-[10px] font-raleway font-bold text-[18px] text-center">
        {{ title }}
        <p v-if="discount" class="inline-flex text-[10px] rounded-full justify-center items-center  h-8 w-8 px-1 py-[10px] bg-primary-1 text-white">
          -{{ discount }}%</p
        >
      </p>
      <p class="font-raleway font-bold text-[18px] text-center">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
