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
  <input type="text" :value="title" @input="updateTitle" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMessage } from "naive-ui";
const props = defineProps({
  title: String,
  titleModifiers: { default: () => ({ capitalize: undefined }) }
});
console.log(props.titleModifiers); // { capitalize: true }
const emit = defineEmits(["update:title"]);
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
const updateTitle = (e: Event) => {
  let value = (e.target as HTMLInputElement).value;
  if (props.titleModifiers?.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  emit("update:title", value);
};
defineExpose({
  open
});
</script>

<style scoped></style>
