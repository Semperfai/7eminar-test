<script setup lang="ts">
import { TARIFF_PACKAGES } from '@/__mocks__/tariff-packages';
import { useBreakpoints } from '@/composables/useBreakpoints';
const breakpoints = useBreakpoints();
const showTable = computed(() => {
  return breakpoints?.value.isLg;
});
const countDownData = reactive<{
  dateEnd: string;
  text: string;
}>({
  dateEnd: '2023-10-03T00:00:00+02:00',
  text: '(для діючих передплатників додаткова знижка 10%)',
});
</script>
<template>
  <section id="PrepaymentSection" class="pt-20 pb-10 sm:pb-20 bg-white-1">
    <BaseContainer>
      <h2 class="font-eukraine font-bold text-[24px] sm:text-[42px] text-center mb-[20px]">
        Передплата на Вищу Бухгалтерську<br />
        Онлайн-Академію
      </h2>
      <p class="font-raleway font-bold text-xl text-center mb-6 sm:mb-10">
        Оберіть свій тарифний пакет:
      </p>

      <PrepaymentTable v-if="showTable">
        <template #header>
          <BaseCountdown :text="countDownData.text" :end="countDownData.dateEnd" />
          <PrepaymentCart
            :hit="true"
            discount="-75%"
            :price="1079"
            title="СУПЕРПРОФЕСІОНАЛ"
            subtitle="8 професійних курсів за ціною 2"
            hit-text="ХІТ ПРОДАЖУ"
            payment-method="Оплатити частинами"
          >
            <template #action>
              <BaseButton
                size="small"
                type="primary"
                text="Оплатити карткою"
                to="##"
                link
                class="mb-3"
              />
            </template>
          </PrepaymentCart>
          <PrepaymentCart
            class="self-end"
            :hit="false"
            discount="-75%"
            :price="1079"
            title="ПРЕМІУМ"
            subtitle="8 професійних курсів за ціною 2 + Бухгалтерьска Відеоплатформа № 1 "
            hit-text="ХІТ ПРОДАЖУ"
            payment-method="Оплатити частинами"
          >
            <template #action>
              <BaseButton
                size="small"
                type="primary"
                text="Оплатити карткою"
                to="##"
                link
                class="mb-3"
              />
            </template>
          </PrepaymentCart>
        </template>
        <template #body>
          <PrepaymentTableRow
            v-for="item in TARIFF_PACKAGES"
            :key="item.id"
            :text="item.text"
            :new="item.new"
            :rate_one="item.rate_one"
            :rate_two="item.rate_two"
          />
        </template>
        <template #footer>
          <PrepaymentCart :hit="false" discount="-75%" :price="1079">
            <template #action>
              <BaseButton
                size="small"
                type="primary"
                text="Завантажити рахунок"
                to="##"
                link
                class="mb-3"
              />
            </template>
          </PrepaymentCart>
          <PrepaymentCart class="self-end" :hit="false" discount="-75%" :price="1079">
            <template #action>
              <BaseButton
                size="small"
                type="primary"
                text="Завантажити рахунок"
                to="##"
                link
                class="mb-3"
              />
            </template>
          </PrepaymentCart>
        </template>
      </PrepaymentTable>
      <PrepaymentTableMobile v-if="!showTable">
        <template #default>
          <BaseCountdown :text="countDownData.text" :end="countDownData.dateEnd" />
          <PrepaymentCart
            :hit="true"
            discount="-75%"
            :price="1079"
            title="СУПЕРПРОФЕСІОНАЛ"
            subtitle="8 професійних курсів за ціною 2"
            hit-text="ХІТ ПРОДАЖУ"
            payment-method="Оплатити частинами"
          >
            <template #action>
              <BaseButton
                size="small"
                type="primary"
                text="Оплатити карткою"
                to="##"
                link
                class="mb-3"
              />
            </template>
          </PrepaymentCart>
          <PrepaymentTableMobileRow
            v-for="item in TARIFF_PACKAGES"
            :key="item.id"
            :text="item.text"
            :new="item.new"
            :rate_one="item.rate_one"
          />
          <PrepaymentCart class="mb-11" :hit="false" discount="-75%" :price="1079">
            <template #action>
              <BaseButton
                size="small"
                type="primary"
                text="Завантажити рахунок"
                to="##"
                link
                class="mb-3"
              />
            </template>
          </PrepaymentCart>
          <PrepaymentCart
            :hit="false"
            discount="-75%"
            :price="1079"
            title="ПРЕМІУМ"
            subtitle="8 професійних курсів за ціною 2 + Бухгалтерьска Відеоплатформа № 1 "
            hit-text="ХІТ ПРОДАЖУ"
            payment-method="Оплатити частинами"
          >
            <template #action>
              <BaseButton
                size="small"
                type="primary"
                text="Оплатити карткою"
                to="##"
                link
                class="mb-3"
              />
            </template>
          </PrepaymentCart>
          <PrepaymentTableMobileRow
            v-for="item in TARIFF_PACKAGES"
            :key="item.id"
            :text="item.text"
            :new="item.new"
            :rate_one="item.rate_one"
          />
        </template>
      </PrepaymentTableMobile>
    </BaseContainer>
  </section>
</template>
