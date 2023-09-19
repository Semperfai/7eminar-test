<script setup lang="ts">
import { useBreakpoints } from '@/composables/useBreakpoints';
const breakpoints = useBreakpoints();

const slidesPerView = computed(() => {
  return breakpoints?.value.isXs ? 1 : breakpoints?.value.isLg ? 3 : 2;
});

const slides = [
  {
    id: 1,
    title: 'Професії:',
    text: 'Головбух, Фіндир, HR',
    images: [
      'https://res.cloudinary.com/dnenvhtxp/image/upload/v1694696152/7eminar-test/slide1_rnknpe.png',
    ],
  },
  {
    id: 2,
    title: '',
    text: 'Закриті клубні лекції',
    images: [
      'https://res.cloudinary.com/dnenvhtxp/image/upload/v1694696152/7eminar-test/slide2_y5aybg.png',
    ],
  },
  {
    id: 3,
    title: 'Підвищення кваліфікації:',
    text: 'ПДВ, ЗП, ЗЕД, ФОП та ін.',
    images: [
      'https://res.cloudinary.com/dnenvhtxp/image/upload/v1694696152/7eminar-test/slide3_giq3mm.png',
    ],
  },
];
</script>
<template>
  <client-only>
    <section
      id="PreviewSection"
      class="flex flex-col justify-center items-cente pt-16 mb-6 sm:mb-18 bg-white"
    >
      <BaseContainer>
        <div class="flex flex-col justify-center items-center">
          <p class="font-raleway font-medium text-[18px] sm:text-[17px] mb-7">
            Вища Бухгалтерьска Online-Академія
          </p>
          <h1 class="font-eukraine font-bold text-[24px] sm:text-[42px] text-center mb-7">
            Підвищення кваліфікації та профперепідготовка для бухгалтерів
          </h1>
          <BaseButton
            size="large"
            type="primary"
            text="Обрати навчання >>"
            to="##"
            link
            class="sm:mb-10 mb-5"
          />
          <Swiper
            class="w-[300px] sm:w-[600px] lg:w-[910px]"
            :slides-per-view="slidesPerView"
            :space-between="15"
          >
            <SwiperSlide v-for="slide in slides" :key="slide.id">
              <div
                class="relative h-[700px] flex justify-center items-center hover:-translate-y-10 transition-all duration-200 ease-linear"
              >
                <div class="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                  <img
                    class="h-[80%] w-[90%] sm:w-[100%] sm:h-[90%] max-w-[300px]"
                    :src="slide.images[0]"
                  />
                </div>
                <div
                  class="backdrop-blur-xl bg-white/30 rounded-xl h-32 sm:h-44 flex flex-col justify-center translate-y-16"
                >
                  <div class="sm:w-[249px] text-center p-2">
                    <p
                      v-if="slide.title"
                      class="font-eukraine font-thin text-xs sm:text-base text-white"
                    >
                      {{ slide.title }}
                    </p>
                    <p class="font-eukraine font-bold text-xs sm:text-base text-white">
                      {{ slide.text }}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <SwiperControls :slides="slides" class="mb-6" v-if="breakpoints?.isXs" />
          <p class="font-ukraine font-bold text-sm sm:text-base max-w-[700px] text-center sm:mb-12">
            Разом дешевше! Купуйте передплату на Вищу Бухгалтерську Online-Академію
            <span class="text-primary-1">8 професій за ціною 2</span>
          </p>
        </div>
      </BaseContainer>
    </section>
  </client-only>
</template>
