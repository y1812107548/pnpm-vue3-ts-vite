<script setup lang="ts">
import { ref } from "vue";
import { zhCN, dateZhCN, GlobalThemeOverrides } from "naive-ui";
import { darkTheme } from "naive-ui";
import type { GlobalTheme } from "naive-ui";
const theme = ref<GlobalTheme | null>(null);
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#4098fc",
    primaryColorHover: "#4098fc",
    primaryColorPressed: "#4098fc",
    primaryColorSuppl: "#4098fc"
  }
};
</script>

<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="theme"
    :theme-overrides="themeOverrides"
  >
    <n-space>
      <n-button @click="theme = darkTheme">深色</n-button>
      <n-button @click="theme = null"> 浅色</n-button>
    </n-space>
    <RouterView />
    <n-global-style />
  </n-config-provider>
</template>

<style scoped lang="scss"></style>
