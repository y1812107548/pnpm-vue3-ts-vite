<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { nextTick } from "vue";
export interface Props {
  msg: string;
  title: string | number;
}
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
</script>

<template>
  <h1>{{ title }}</h1>
  <h2>{{ msg }}</h2>
  <h3>{{ fullName }}</h3>
  <div class="card">
    <n-button @click="increment(-1)">-</n-button>
    {{ state.count }}
    <n-button @click="increment(1)">+</n-button>
    <p>Edit<code>components/HelloWorld.vue</code> to test HMR</p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the
    official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <p>has published books:{{ publicshedBooksMessage }}</p>
</template>

<style scoped></style>
