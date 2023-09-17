<script setup lang="ts"></script>
<template>
  <div
    role="header"
    class="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-4 justify-between items-center justify-items-center mb-6"
  >
    <slot name="header"></slot>
  </div>
  <div
    role="body"
    class="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-4 justify-between items-center mb-6"
  >
    <slot name="body"></slot>
  </div>
  <div
    role="footer"
    class="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-4 justify-between items-center justify-items-center"
  >
    <div></div>
    <slot name="footer"></slot>
  </div>
</template>

<style scoped></style>
