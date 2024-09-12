<script setup lang="ts">
import PlusIcon from './icons/PlusIcon.vue';
</script>

<template>
  <button type="button" class="add-btn">
    <PlusIcon />
    Добавить ребёнка
  </button>
</template>

<style scoped>
.add-btn {
  display: flex;
  column-gap: 6px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-sky-blue);
  border: var(--color-sky-blue) 2px solid;
  border-radius: 100px;
  padding: 10px 20px;
  transition: opacity 0.3s ease-in-out;
}
</style>
