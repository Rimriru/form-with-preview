<script setup lang="ts">
import InputSet from '@/components/InputSet.vue';
import AddButton from '@/components/AddButton.vue';
import SubmitButton from '@/components/SubmitButton.vue';
import { reactive, ref } from 'vue';
import formState from '@/composables/useFormState';
import { useRouter } from 'vue-router';

const parentInputValues = ref({
  name: '',
  age: ''
});
const childrenList = reactive<{ name: string; age: string }[]>([]);
const router = useRouter();

// Добавляет новый элемент в childrenList при нажатии на "Добавить ребенка"
const onAddBtnClick = () => {
  childrenList.push({ name: '', age: '' });
};

// Удаляет элемент из childrenList при нажатии на "Удалить"
const onRemoveBtnClick = (index: number) => {
  childrenList.splice(index, 1);
};

// ресет значений полей формы
const resetFormValues = () => {
  parentInputValues.value = { name: '', age: '' };
  childrenList.length = 0;
};

// При сабмите формы происходит сохранение данных родителя и детей в глобальный стейт
const onSubmitBtnClick = () => {
  formState.parent = parentInputValues.value;
  formState.children = [...childrenList];
  resetFormValues();
  router.push('/preview');
};
</script>

<template>
  <main class="content">
    <form class="form" @submit.prevent="onSubmitBtnClick">
      <h1 class="heading heading_main">Персональные данные</h1>
      <InputSet class="form__parent-inputs" :model-values="parentInputValues" />
      <div class="form__children">
        <h2 class="heading">Дети (макс. 5)</h2>
        <Transition>
          <AddButton v-if="childrenList.length < 5" @click="onAddBtnClick" />
        </Transition>
      </div>
      <ul class="form__children-list">
        <li v-for="(_, index) of childrenList" :key="index">
          <InputSet
            :model-values="childrenList[index]"
            :is-for-child="true"
            :index="index"
            @remove-btn-click="onRemoveBtnClick"
          />
        </li>
      </ul>
      <SubmitButton />
    </form>
  </main>
</template>

<style scoped>
.form .form__parent-inputs {
  margin-bottom: 33px;
}

.form .form__children {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 11px;
  height: 48px;
}

.form .form__children-list {
  display: grid;
  row-gap: 10px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
