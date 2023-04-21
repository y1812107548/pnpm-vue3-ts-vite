<template>
  <div>
    222
    <HelloWorld :msg="msg" />
    <n-space>
      <n-button>Default</n-button>
      <n-button type="tertiary"> Tertiary </n-button>
      <n-button type="primary"> Primary </n-button>
      <n-button type="info"> Info </n-button>
      <n-button type="success"> Success </n-button>
      <n-button type="warning"> Warning </n-button>
      <n-button type="error"> Error </n-button>
    </n-space>
    <n-dropdown trigger="hover" :options="options" @select="handleSelect">
      <n-button>找个地方休息 </n-button>
    </n-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const msg = ref<string>('vite-vue');
const options = reactive([
  {
    label: '滨海湾金沙，新加坡',
    key: 'marina bay sands',
    disabled: true
  },
  {
    label: '布朗酒店，伦敦',
    key: "brown's hotel, london"
  },
  {
    label: '亚特兰蒂斯巴哈马，拿骚',
    key: 'atlantis nahamas, nassau'
  },
  {
    label: '比佛利山庄酒店，洛杉矶',
    key: 'the beverly hills hotel, los angeles'
  }
]);
const handleSelect = (key: string | number) => {
  console.log(key);
};
console.log(msg);
</script>

<style scoped></style>
