<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="closeModal">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z"
            fill="white"
          />
        </svg>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Состояние модального окна
const isOpen = ref(true)

// Функция для открытия модального окна
const openModal = () => {
  isOpen.value = true
}

// Функция для закрытия модального окна
const closeModal = () => {
  isOpen.value = false
}

// Экспортируем функции и состояние, чтобы их можно было использовать извне
defineExpose({ openModal, closeModal, isOpen })
</script>

<style scoped>
.modal-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  border-radius: 12px;
}

.modal-content {
  background-color: var(--color-background-block);
  padding: 18px;
  border-radius: 12px;
  position: relative;
  border: 1px solid var(--color-background-mute);
  max-width: 787px;
  width: 100%;
}

.modal-close {
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
