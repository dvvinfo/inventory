<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'

// Состояние темы (по умолчанию - темная)
const isLightTheme = ref(false)

// Функция для переключения темы
const toggleTheme = () => {
  isLightTheme.value = !isLightTheme.value
  const theme = isLightTheme.value ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme) // Сохраняем тему в localStorage
}

// При загрузке приложения восстанавливаем тему из localStorage
onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'dark'
  isLightTheme.value = savedTheme === 'light'
  document.documentElement.setAttribute('data-theme', savedTheme)
})
</script>

<template>
  <!-- Переключатель темы -->
  <button class="theme-toggle" @click="toggleTheme">
    {{ isLightTheme ? '🌙' : '☀️ ' }}
  </button>
  <RouterView />
</template>

<style scoped lang="scss">
.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: var(--color-background-btn);
  color: var(--color-text);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.theme-toggle:hover {
  opacity: 0.9;
}
</style>
