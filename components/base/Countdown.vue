<script setup lang="ts">
interface IDiff {
  hour: number | string;
  minute: number | string;
  second: number | string;
}

const props = defineProps<{
  end: string;
  text: string;
}>();

const { end, text } = toRefs(props);

const diff = ref<Partial<IDiff>>({});
const timer = ref();
const futureDate = new Date(end.value);

//methods
const getDateDiff = (date1: Date, date2: Date) => {
  const diff = new Date(date2.getTime() - date1.getTime());

  if (diff.getTime() < 0) {
    clearInterval(timer.value);
    return {
      hour: '00',
      minute: '00',
      second: '00',
    };
  }

  const milliseconds = date2.getTime() - date1.getTime();

  const totalHours = milliseconds / (1000 * 60 * 60);
  const roundedTotalHours = Math.round(totalHours);

  const minute = diff.getUTCMinutes();
  const second = diff.getUTCSeconds();

  return {
    hour: roundedTotalHours < 10 ? `0${roundedTotalHours}` : roundedTotalHours,
    minute: minute < 10 ? `0${minute}` : minute,
    second: second < 10 ? `0${second}` : second,
  };
};

const getDiff = () => {
  diff.value = getDateDiff(new Date(), futureDate);
};

//lifecycle
onBeforeMount(() => {
  timer.value = setInterval(getDiff, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timer.value);
});
</script>
<template>
  <div class="flex flex-col items-center">
    <div
      class="flex justify-between gap-2 items-start max-w-[146px] h-14 text-primary-1 font-normal"
    >
      <div class="flex gap-2 items-center justify-center">
        <p class="opacity-40 text-[29px] leading-normal">
          {{ diff.hour }}
        </p>
      </div>
      <div class="flex gap-[7px] items-center justify-center">
        <p class="text-[22px]">:</p>
        <p class="opacity-40 text-[29px] leading-normal">
          {{ diff.minute }}
        </p>
        <p class="text-[22px]">:</p>
      </div>
      <div class="flex items-center justify-center">
        <p class="text-[29px] leading-normal">
          {{ diff.second }}
        </p>
      </div>
    </div>
    <p class="font-raleway text-[15px] max-w-[225px] text-center leading-normal text-[#515154]">
      {{ text }}
    </p>
  </div>
</template>
