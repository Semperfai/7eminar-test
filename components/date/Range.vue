<script setup lang="ts">
import { useBreakpoints } from '@/composables/useBreakpoints';
import { formatDate } from '@/lib/helpers/formatDate';
const breakpoints = useBreakpoints();

//types
type Range = {
  id: number;
  title: string;
  date_start: Date;
  date_end: Date;
};

interface IProps {
  ranges: Range[];
}

//props
const props = defineProps<IProps>();
const { ranges } = toRefs(props);

//computed
const align = computed(() => {
  return breakpoints?.value.isXs ? 'vertical' : 'horizontal';
});

const timeSlice = computed(() => {
  const milliseconds =
    ranges.value[ranges.value.length - 1].date_end.getTime() - ranges.value[0].date_start.getTime();
  const days = milliseconds / (1000 * 60 * 60 * 24);
  const roundedDays = Math.round(days);
  return roundedDays;
});

const currentTimeSlice = computed(() => {
  const milliseconds = Date.now() - ranges.value[0].date_start.getTime();
  const days = milliseconds / (1000 * 60 * 60 * 24);
  const roundedDays = Math.round(days);
  return roundedDays;
});

const percentPosition = computed(() => {
  return (currentTimeSlice.value / timeSlice.value) * 100;
});

const range = computed(() => {
  return `${calculateCurrentPosition()}% 100%`;
});

//methods
const calculateSegmentsWidth = (): string[] => {
  const totalTimeSlice = timeSlice.value;

  const segments = ranges.value.map((range) => {
    const rangeTimeSliceInMilliseconds = range.date_end.getTime() - range.date_start.getTime();
    const rangeTimeSliceInDays = Math.round(rangeTimeSliceInMilliseconds / (1000 * 60 * 60 * 24));

    const percent = ((rangeTimeSliceInDays / totalTimeSlice) * 100).toFixed(2);
    return `${percent}%`;
  });

  return segments;
};

const calculateCurrentPosition = (): number => {
  const currentDay = new Date().getDate();

  const hasBreakpoint = ranges.value.some((range) => {
    const rangeDay = range.date_end.getDate();
    return currentDay === rangeDay;
  });

  if (hasBreakpoint) {
    const segments = calculateSegmentsWidth();
    const currentSegmentIndex = ranges.value.findIndex((range) => {
      const rangeDay = range.date_end.getDate();
      return currentDay === rangeDay;
    });

    const percentPositionByBrakepoint = segments
      .slice(0, currentSegmentIndex + 1)
      .reduce((acc, segment) => {
        return acc + Number(segment.slice(0, -1));
      }, 0);

    return percentPositionByBrakepoint;
  } else {
    return percentPosition.value;
  }
};

watch(
  () => ranges.value,
  () => {
    calculateSegmentsWidth();
    calculateCurrentPosition();
  },
);
</script>
<template>
  <div
    id="Range"
    class="rotate-90 sm:rotate-0 min-w-[700px] sm:min-w-0 translate-y-[300px] -translate-x-[25%] sm:translate-y-0 sm:translate-x-0"
  >
    <div
      class="flex justify-between text-base sm:text-[18px] text-center leading-snug font-raleway font-normal"
    >
      <div
        :style="{ width: calculateSegmentsWidth()[range.id - 1] }"
        v-for="range in ranges"
        :key="range.id"
      >
        <p
          class="-rotate-90 max-w-[100px] sm:max-w-none text-left sm:text-center -translate-y-5 sm:rotate-0 sm:-translate-y-0"
        >
          {{ range.title }}
        </p>
      </div>
    </div>
    <div
      id="Range"
      class="relative flex place-items-center h-[33px] mt-5 mb-5"
      :class="{ 'is-vertical': align === 'vertical' }"
    >
      <div class="timeline"></div>
      <div class="circle" :style="{ left: calculateCurrentPosition() + '%' }"></div>
      <div class="absolute top-0 left-0 h-full flex w-full">
        <div
          class="segments"
          v-for="range in ranges"
          :key="range.id"
          :style="{ width: calculateSegmentsWidth()[range.id - 1] }"
        ></div>
      </div>
    </div>
    <div class="dates">
      <div
        v-for="range in ranges"
        :key="range.id"
        :style="{ width: calculateSegmentsWidth()[range.id - 1] }"
      >
        <p class="inline-block -rotate-90 sm:rotate-0 sm:translate-y-0 translate-y-10">
          {{ formatDate(range.date_end) }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  @apply self-center cursor-pointer h-[6px] w-full;
  background-image: linear-gradient(to right, #000000, #010101),
    linear-gradient(to right, #f6f6f6, #f6f6f6);
  background-size: v-bind(range), 100%;
  background-position: 0% 0%, 70% 0%;
  background-repeat: no-repeat;
  -webkit-appearance: none;
}

.circle {
  @apply w-[33px] absolute h-[33px] -translate-x-1/2 bg-yellow-2 border-black border-solid rounded-full border-[3px];
}
.circle::after {
  @apply content-['']  absolute top-1/2 left-1/2 w-[13px] h-[13px] bg-black rounded-full -translate-x-1/2 -translate-y-1/2;
}

.segments {
  @apply bg-transparent border-l-[3px] border-black;
}

.segments:nth-last-child(1) {
  @apply bg-transparent border-r-[3px] border-black;
}

.dates {
  @apply flex justify-between text-[18px] text-end leading-snug font-raleway font-bold;
}

.dates > div:not(:last-child) p {
  @apply translate-x-1/2;
}
</style>
