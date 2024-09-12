<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="header">
    <div class="header__container">
      <a href="#">
        <img alt="logo" class="logo" src="@/assets/logo.png" width="93" height="30" />
      </a>
      <div class="header__links">
        <nav>
          <RouterLink to="/form" class="header__link">Форма</RouterLink>
          <RouterLink to="/preview" class="header__link">Превью</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />

  <footer>
    <p>all rights reserved</p>
  </footer>
</template>

<style scoped>
.header {
  border-bottom: #1111111a 1px solid;
}

.header__container {
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 22px 92px;
}

.header__links {
  display: flex;
}

nav {
  width: 100%;
  font-size: 14px;
  display: flex;
  column-gap: 24px;
  margin: auto;
}

nav .header__link {
  color: var(--color-dark-gray);
  padding: 0;
  transition: opacity 0.3s ease-in-out;
  line-height: 1.7;
}

footer {
  background-color: var(--color-medium-gray);
  text-align: center;
  font-size: 13px;
  line-height: 1.22;
  margin-top: auto;
  padding-block: 30px;
}
</style>
