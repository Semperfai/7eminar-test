<script setup lang="ts">
type Slide = {
  id: number
  title: string
  text: string
  images: string[]
}

interface IProps {
  slides: Slide[]
}

const swiper = useSwiper()

const props = defineProps<IProps>()

const { slides } = toRefs(props)

const currentSlideIndex = ref<number>(0)

// computed
const isLastSlide = computed(
  () => currentSlideIndex.value >= slides?.value.length - 1
)

//methods
const nextSlide = () => {
  if (isLastSlide.value) {
    return
  }
  swiper.value.slideNext()
  currentSlideIndex.value++
}

const prevSlide = () => {
  if (currentSlideIndex.value === 0) {
    return
  }
  swiper.value.slidePrev()
  currentSlideIndex.value--
}
</script>

<template>
  <div class="flex gap-[6px] items-center justify-center">
    <button
      :disabled="currentSlideIndex === 0"
      :class="{ 'text-gray-200': currentSlideIndex === 0 }"
      class="h-11"
      @click="prevSlide">
      <Icon name="ei:arrow-left" size="30" />
    </button>
    <button
      :disabled="isLastSlide"
      :class="{ 'text-gray-200': isLastSlide }"
      class="h-11"
      @click="nextSlide">
      <Icon name="ei:arrow-right" size="30" />
    </button>
  </div>
</template>
