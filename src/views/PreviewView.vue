<script setup lang="ts">
import formState from '@/composables/useFormState';
</script>

<template>
  <main class="content">
    <!--Родитель-->
    <h1 class="heading">Персональные данные</h1>
    <p v-if="formState.parent.name || formState.parent.age" class="text-bold">
      {{ formState.parent.name }}, {{ formState.parent.age }} лет
    </p>
    <!--Дети-->
    <h2 class="heading">Дети</h2>
    <ul class="children-list">
      <li v-for="(child, index) of formState.children" :key="index">
        <p class="text-bold">{{ child.name }}, {{ child.age }} лет</p>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.content > .text-bold {
  margin-bottom: 30px;
}

.text-bold {
  font-size: 16px;
  line-height: 1.5;
  font-weight: 700;
}

.children-list {
  display: grid;
  justify-items: baseline;
}

.children-list li {
  background-color: var(--color-light-gray);
  padding: 10px 20px;
  border-radius: 5px;
}

.children-list li p {
  display: inline;
}

.children-list li:not(:last-of-type) {
  margin-bottom: 30px;
}
</style>
