import { reactive } from 'vue';

const formState = reactive<{
  parent: { name: string; age: string };
  children: { name: string; age: string }[];
}>({ parent: { name: '', age: '' }, children: [] });

export default formState;
