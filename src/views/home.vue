<template>
  <div>
    <HelloWorld :[attributeName]="msg" :title="title" />
    <n-space>
      <n-button>Default</n-button>
      <n-button type="tertiary"> Tertiary </n-button>
      <n-button type="primary"> Primary </n-button>
      <n-button type="info"> Info11 </n-button>
      <n-button type="success"> Success222 </n-button>
      <n-button type="warning"> Warning </n-button>
      <n-button type="error"> Error </n-button>
    </n-space>
    <n-dropdown trigger="hover" :options="options" @[eventName]="handleSelect">
      <n-button>找个地方休息 </n-button>
    </n-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const msg = ref<string>(
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quidem sint id, similique saepe voluptates placeat aperiam tempora in modi aliquid totam perspiciatis vero doloribus quia cumque omnis corrupti! Reprehenderit?"
);
const title = ref<string | number>("2023年");
const eventName = ref("select");
const attributeName = "msg";
const options = reactive([
  {
    label: "滨海湾金沙，新加坡",
    key: "marina bay sands",
    disabled: true
  },
  {
    label: "布朗酒店，伦敦",
    key: "brown's hotel, london"
  },
  {
    label: "亚特兰蒂斯巴哈马，拿骚",
    key: "atlantis nahamas, nassau"
  },
  {
    label: "比佛利山庄酒店，洛杉矶",
    key: "the beverly hills hotel, los angeles"
  }
]);
const handleSelect = (key: string | number) => {
  console.log(key);
};
console.log("msg:", msg.value);
</script>

<style scoped></style>
