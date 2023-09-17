<script setup lang="ts">
const ranges = [
  {
    id: 1,
    title: 'Ціни раннього бронювання',
    date_start: new Date(2023, 7, 10),
    date_end: new Date(2023, 7, 21),
  },
  {
    id: 2,
    title: 'Подорожчання на 10%',
    date_start: new Date(2023, 7, 21),
    date_end: new Date(2023, 8, 1),
  },
  {
    id: 3,
    title: 'Подорожчання на 15%',
    date_start: new Date(2023, 8, 1),
    date_end: new Date(2023, 8, 15),
  },
  {
    id: 4,
    title: 'Квитки вже закінчаться',
    date_start: new Date(2023, 8, 15),
    date_end: new Date(2023, 9, 3),
  },
];
</script>
<template>
  <section id="DataRangeSection" class="pt-20 pb-20 bg-white">
    <BaseContainer>
      <h2 class="font-eukraine font-bold text-[24px] sm:text-[42px] text-center sm:mb-14">
        Навчання, яке працює!Відкрийте для себе найпопулярніші курси
      </h2>
      <DateRange :ranges="ranges" />
    </BaseContainer>
  </section>
</template>
