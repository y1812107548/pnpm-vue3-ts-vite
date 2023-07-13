<template>
  <div>
    <h1>form表单</h1>
    <SearchInput v-model="searchData"></SearchInput>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const searchData = ref({
  keyword: "",
  placeholder: "请输入",
  options: [
    {
      label: "选项1",
      value: "0"
    },
    {
      label: "选项2",
      value: "1"
    }
  ],
  selectValue: "0"
});
</script>

<style scoped></style>
