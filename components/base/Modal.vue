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
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 40%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
}
</style>
