import { ref, watch } from "vue";
export const useTest = ref(0);

export const changeTest = () => {
  useTest.value += 1;
  console.log(useTest.value);
};

// watch(()=>useTest, (newValue) => {
//   console.log(newValue);
// })

// export default {
//   useTest,
//   changeTest
// }
