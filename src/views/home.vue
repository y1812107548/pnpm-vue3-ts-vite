<template>
  <div>
    <n-card title="搜索结果" v-if="answer">
      <n-input-group>
        <n-button type="primary"> 搜索 </n-button>
        <n-input
          :style="{ width: '33%' }"
          v-model:value="inputValue"
          type="text"
          autofocus
          clearable
        />
        <n-button type="primary" ghost @click="handleSearch">查询</n-button>
      </n-input-group>
      {{ answer }}
    </n-card>
    <HelloWorld :[attributeName]="msg" :title="title" />
    <n-dropdown trigger="hover" :options="options" @[eventName]="handleSelect">
      <n-button>找个地方休息 </n-button>
    </n-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue";
const msg = ref<string>(
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quidem sint id, similique saepe voluptates placeat aperiam tempora in modi aliquid totam perspiciatis vero doloribus quia cumque omnis corrupti! Reprehenderit?"
);
const title = ref<string | number>("2023年");
const eventName = ref("select");
const attributeName = "msg";
const inputValue = ref<string>("");
const answer = ref("Questions usually contain a question mark. ;-)");
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
// 可以直接侦听一个 ref
watch(inputValue, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf("?") > -1) {
    answer.value = "Thinking...";
    try {
      const res = await fetch("https://yesno.wtf/api");
      answer.value = (await res.json()).answer;
    } catch (error) {
      answer.value = "Error! Could not reach the API. " + error;
    }
  }
});
const handleSelect = (key: string | number) => {
  console.log(key);
};
const handleSearch = (e: Event) => {
  console.log(e);
};
console.log("msg:", msg.value);
</script>

<style scoped></style>
