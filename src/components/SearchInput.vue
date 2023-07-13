<template>
  <el-input v-model="model.keyword" placeholder="Please input" class="input-with-select">
    <template #prepend>
      <el-select v-model="model.selectValue" placeholder="Select" style="width: 115px">
        <el-option
          v-for="item in model.options"
          :key="item['value']"
          :label="item['label']"
          :value="item['value']"
        >
        </el-option>
      </el-select>
    </template>
    <template #append>
      <el-button :icon="Search" />
    </template>
  </el-input>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import { useVModel } from "@/components/useVModel";

interface Props {
  modelValue: object;
}
const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);
const model = useVModel(props, "modelValue", emit);
</script>

<style scoped></style>
