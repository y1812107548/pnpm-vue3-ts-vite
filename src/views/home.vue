<template>
  <div>
    222
    <HelloWorld :msg="msg" />
    <n-space>
      <n-button>Default</n-button>
      <n-button type="tertiary">
        Tertiary </n-button>
      <n-button type="primary">
        Primary </n-button>
      <n-button type="info">

        Info </n-button>
      <n-button type="success"> Success </n-button>
      <n-button type="warning"> Warning </n-button>
      <n-button type="error"> Error </n-button>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const msg = ref<string>('vite-vue');
console.log(msg);
</script>

<style scoped></style>
