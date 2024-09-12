<script setup lang="ts">
defineProps<{
  title: string;
}>();
const model = defineModel<string>();
</script>

<template>
  <label class="input">
    <span>{{ title }}</span>
    <input type="text" v-model="model" />
  </label>
</template>

<style scoped>
.input {
  display: block;
  padding: 8px 16px;
  border: var(--color-light-gray) 1px solid;
  border-radius: 4px;
}

.input span {
  display: block;
  font-size: 13px;
  color: var(--color-dark-gray);
  line-height: 1.22;
  margin-bottom: 2px;
}

.input input {
  font-family: inherit;
  font-size: 14px;
  line-height: 1.7;
}
</style>
