<template>
  <n-modal
    v-model:show="showModal"
    preset="dialog"
    title="确认"
    content="你确认"
    positive-text="确认"
    negative-text="取消"
    @positive-click="onPositiveClick"
    @negative-click="onNegativeClick"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMessage } from "naive-ui";
const message = useMessage();
const showModal = ref(false);
const onNegativeClick = () => {
  message.success("Cancel");
  showModal.value = false;
};
const onPositiveClick = () => {
  message.success("Submit");
  showModal.value = false;
};
const open = () => {
  console.log("触发open方法");
  showModal.value = true;
};
defineExpose({
  open
});
</script>

<style scoped></style>
