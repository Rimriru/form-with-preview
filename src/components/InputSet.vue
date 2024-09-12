<script setup lang="ts">
import InputComponent from './InputComponent.vue';
import RemoveButton from './RemoveButton.vue';

defineProps<{
  isForChild?: boolean;
  modelValues: { name: string; age: string };
  index?: number;
}>();

const emit = defineEmits<{
  removeBtnClick: [index: number];
}>();
</script>

<template>
  <div :class="['container', { container__type_child: isForChild }]">
    <InputComponent :title="'Имя'" v-model="modelValues.name" />
    <InputComponent :title="'Возраст'" v-model="modelValues.age" />
    <RemoveButton v-if="isForChild" @click="emit('removeBtnClick', index!)" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.container__type_child {
  flex-direction: row;
  column-gap: 18px;
}
</style>
