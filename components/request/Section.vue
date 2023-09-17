<script setup lang="ts">
const infoItems = [
  { id: 1, title: '8+', description: 'професійних курсів' },
  { id: 2, title: '12', description: 'закритих клубних лекцій' },
  { id: 3, title: '48', description: 'нових вебінарів та тренінгів' },
  { id: 4, title: 'infinity', description: 'Безлімітні відповідіна запитання протягом навчання' },
];
</script>
<template>
  <section id="RequestSection" class="pt-16 sm:pt-20 pb-20 bg-white">
    <BaseContainer>
      <div
        class="flex justify-center md:justify-between flex-wrap md:flex-nowrap items-start gap-16"
      >
        <BaseForm
          title="Залиште заявку, і ми підберемо для вас умови зі знижкою"
          class="max-w-[488px]"
        />
        <RequestInfo
          subtitle-info="Тестові та практичні"
          subtitle-text-info="завдання зі зворотним зв'язком"
          title-info="З передплатою Академії ви отримаєте:"
          :info-items="infoItems"
        />
      </div>
    </BaseContainer>
  </section>
</template>
