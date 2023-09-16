<template>
  <client-only>
    <label for="input" class="font-raleway text-base font-normal">{{ label }}</label>
    <input
      id="input"
      :type="inputType"
      :maxlength="max"
      :placeholder="placeholder"
      @focus="isFocused = true"
      @blur="isFocused = false"
      class="w-full mt-[10px] bg-white-1 text-gray-800 border text-base border-black rounded-full px-7 py-[15px] placeholder-gray-300 focus:outline-none hover:bg-slate-100"
      :class="{
        'border-gray-900': isFocused,
        'border-red-500': errorState,
        'border-green-500': normalState,
      }"
      v-model="inputComputed"
      autocomplete="off"
    />
    <span v-if="errorState" class="text-red-500 text-[14px] font-semibold">
      {{ validation?.$errors[0]?.$message }}
    </span>
  </client-only>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:input', 'server-errors-state']);

const props = defineProps({
  input: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  inputType: {
    type: String,
    default: 'text',
  },
  validation: {
    type: Object,
    default: null,
  },
  serverErrors: {
    type: String,
    default: '',
  },
  max: {
    type: Number,
    default: 255,
  },
});

const { input, placeholder, inputType, serverErrors, max, validation, label } = toRefs(props);

const isFocused = ref<boolean>(false);
const shouldValidate = ref<boolean>(false);

const errorState = computed(() => {
  return (validation?.value?.$error || serverErrors.value) && shouldValidate.value;
});

const normalState = computed(() => {
  return !validation?.value?.$error && !serverErrors.value && shouldValidate.value;
});

const inputComputed = computed({
  get: () => input.value,
  set: (value) => {
    shouldValidate.value = true;
    emit('server-errors-state');
    emit('update:input', value);
  },
});
</script>
