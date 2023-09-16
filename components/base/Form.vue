<template>
  <div>
    <h3 class="font-eukraine text-base font-bold max-w-[400px]">
      {{ title }}
    </h3>
    <form class="mt-12" @submit.prevent="($event) => submitMethod()">
      <div>
        <BaseInput
          v-model:input="formData.name"
          inputType="text"
          label="Ваше ім'я"
          placeholder="Ваше ім'я"
          :validation="v$.name"
          @server-errors-state="handleServerErrorsState"
          :server-errors="serverErrors"
        />
      </div>

      <div class="mt-4">
        <BaseInput
          v-model:input="formData.phone"
          inputType="tel"
          label="Номер телефону"
          placeholder="Введіть Ваш номер телефону"
          :validation="v$.phone"
          @server-errors-state="handleServerErrorsState"
          :server-errors="serverErrors"
        />
      </div>
      <div class="mt-4">
        <BaseInput
          v-model:input="formData.email"
          label="Ваш E-mail"
          inputType="email"
          placeholder="Введіть ваш E-mail"
          :validation="v$.email"
          @server-errors-state="handleServerErrorsState"
          :server-errors="serverErrors"
        />
      </div>

      <div class="max-w-[225px]">
        <BaseButton
          size="small"
          type="primary"
          text="Зареєструватись"
          :submit-disabled="submitDisabled"
          class="mb-3 mt-6"
        />
      </div>
    </form>
    <BaseModal
      :has-errors="hasErrors"
      :message="modalMessage"
      v-if="showModal"
      @close="showModal = false"
    />
  </div>
</template>

<script setup lang="ts">
import axios from '~/plugins/axios';
import { useVuelidate } from '@vuelidate/core';
import { required, helpers, minLength, email } from '@vuelidate/validators';
import { AxiosError } from 'axios';

const props = defineProps<{
  title: string;
}>();

const { title } = toRefs(props);

const $axios = axios().provide.axios;

const formData = reactive({
  name: '',
  phone: '',
  email: '',
});

const serverErrors = ref<string>('');
const showModal = ref<boolean>(false);
const modalMessage = ref<string>('');
const hasErrors = ref<boolean>(false);

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage('The name field is required', required),
      minLength: minLength(3),
    },
    phone: {
      required: helpers.withMessage('The password field is required', required),
    },
    email: {
      required: helpers.withMessage('The email field is required', required),
      email: helpers.withMessage('Invalid email format', email),
    },
  };
});

const v$ = useVuelidate(rules, formData);

const submitDisabled = computed(() => {
  v$.value.$validate();
  return !formData.email || !formData.name || !formData.phone || v$.value.$error;
});

const submitMethod = async () => {
  serverErrors.value = '';

  try {
    const res = await $axios.post('/api/clients/campaign/test', formData, {
      withCredentials: false,
    });

    if (res.status === 200) {
      showModal.value = true;
      modalMessage.value = 'Заявка відправлена !';
    }
  } catch (error: any) {
    serverErrors.value = error.response.data.message;
    if (error.response.data.message) {
      hasErrors.value = true;
      modalMessage.value = error.response.data.message;
      showModal.value = true;
    }
  }
};

const handleServerErrorsState = () => {
  serverErrors.value = '';
};
</script>
