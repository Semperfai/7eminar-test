<script setup lang="ts">
const props = defineProps<{
  message: string;
  hasErrors: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();
</script>
<template>
  <div class="modal">
    <div class="modal-content">
      <p :class="[hasErrors ? 'text-red-800' : 'text-green-800']">{{ message }}</p>
      <div
        @click="$emit('close')"
        class="absolute top-3 right-3 rounded-full p-1.5 bg-gray-200 hover:bg-gray-300 cursor-pointer"
      >
        <Icon name="mdi:close" size="25" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  @apply flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-black;
}

.modal-content {
  @apply bg-white relative flex items-center justify-center w-1/3 h-1/3 rounded-2xl shadow-xl text-center;
}
</style>
