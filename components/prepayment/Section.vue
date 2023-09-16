<script setup lang="ts">
const dateEnd = '2023-10-03T00:00:00+02:00';
</script>
<template>
  <section id="PrepaymentSection" class="pt-28 pb-20 bg-white-1">
    <BaseContainer>
      <h2 class="font-eukraine font-bold text-[24px] sm:text-[42px] text-center mb-[20px]">
        Передплата на Вищу Бухгалтерську<br />
        Онлайн-Академію
      </h2>
      <p class="font-raleway font-bold text-xl text-center mb-10">Оберіть свій тарифний пакет:</p>
      <!-- header -->
      <div class="grid grid-cols-1 gap-6 justify-center md:flex md:justify-between items-center">
        <BaseCountdown text="(для діючих передплатників додаткова знижка 10%)" :end="dateEnd" />
        <PrepaymentCart
          :hit="true"
          discount="-75%"
          :price="1079"
          title="СУПЕРПРОФЕСІОНАЛ"
          subtitle="8 професійних курсів за ціною 2"
          hit-text="ХІТ ПРОДАЖУ"
          payment-method="Оплатити частинами"
        />
        <PrepaymentCart
          class="self-end"
          :hit="false"
          discount="-75%"
          :price="1079"
          title="ПРЕМІУМ"
          subtitle="8 професійних курсів за ціною 2 + Бухгалтерьска Відеоплатформа № 1 "
          hit-text="ХІТ ПРОДАЖУ"
          payment-method="Оплатити частинами"
        />
      </div>
      <!-- body -->
    </BaseContainer>
  </section>
</template>
