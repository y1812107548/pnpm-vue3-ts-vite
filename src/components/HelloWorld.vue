<template>
  <h1>{{ title }}</h1>
  <h2>{{ msg }}</h2>
  <h3>{{ fullName }}</h3>
  <div class="card">
    <n-button @click="increment(-1)">-</n-button>
    {{ state.count }}
    <n-button @click="increment(1)">+</n-button>
  </div>
  <n-card title="子组件调用父组件方法">
    <n-button @click="changTitle">修改父组件title</n-button>
  </n-card>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { nextTick } from "vue";
export interface Props {
  msg: string;
  title: string | number;
}
// const emit = defineEmits(['some-event'])
const emit = defineEmits<{
  (e: "someEvent", title: string): void;
}>();
// const emit = defineEmits({
//   click:null,
//   someEvent:(val)=>{
//     console.log('somevent',val);
//     if(val) return true
//     return false
//   }
// })
// defineProps<{ msg: string,title:string | number }>();
const props = withDefaults(defineProps<Props>(), {
  msg: "hello vite",
  title: "welcome to vite vue3"
});

const count = ref(0);
const state = reactive({
  count
});
const increment = (num: number) => {
  state.count += num;
  console.log(count.value);
  nextTick(() => {
    // console.log(reactive(state) === state);
  });
};

// const books = reactive([ref('Vue 3 Guide')])
// 这里需要 .value
// console.log(books[0].value)

// const map = reactive(new Map([['count', ref(0)]]))
// 这里需要 .value
// console.log(map.get('count'))

const author = reactive({
  name: "John Doe",
  books: ["Vue 2 - Advanced Guide", "Vue 3 - Basic Guide", "Vue 4 - The Mystery"]
});

const publicshedBooksMessage = computed(() => (author.books.length > 0 ? "Yes" : "No"));

const firstName = ref("John");
const lastName = ref("Doe");

const fullName = computed({
  // getter
  get() {
    return firstName.value + " " + lastName.value;
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(" ");
  }
});

const changTitle = () => {
  emit("someEvent", "修改标题");
};
</script>

<style scoped></style>
