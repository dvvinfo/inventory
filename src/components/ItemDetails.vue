<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import BaseBlock from './BaseBlock.vue'
import BaseButton from './BaseButton.vue'

defineProps<{
  item: { id: number; name: string; image: string; count: number; descrption: string } | null
}>()
const emit = defineEmits(['close', 'delete'])

// Закрытие модального окна при нажатии "Esc"
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('close')
  }
}

// Добавляем обработчик при монтировании и удаляем при размонтировании
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div v-if="item" class="item-details" @click.self="emit('close')">
    <button class="close-btn" @click="emit('close')">
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
    <div class="item-details__image">
      <img :src="item.image" :alt="item.name" />
    </div>
    <div class="item-details-content">
      <BaseBlock size="fluid">{{ item.name }}</BaseBlock>
      <div class="item-details-items">
        <BaseBlock size="xxl">{{ item.descrption }}</BaseBlock>
        <BaseBlock size="xxl">{{ item.descrption }}</BaseBlock>
        <BaseBlock size="xxl">{{ item.descrption }}</BaseBlock>
        <BaseBlock size="xl">{{ item.descrption }}</BaseBlock>
        <BaseBlock size="xs">{{ item.descrption }}</BaseBlock>
      </div>
    </div>
    <div class="item-details-footer">
      <BaseButton label="Удалить предмет" type="danger" @click="emit('delete', item.id)" />
    </div>
  </div>
</template>

<style lang="scss">
.item-details {
  width: 250px;
  height: 500px;
  padding: 55px 15px 18px 15px;
  position: absolute;
  top: 0;
  right: 0;

  background: var(--color-background);
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  border: 1px solid var(--color-background-mute);
  color: var(--color-text);
  text-align: center;
  &-content {
    margin-top: 30px;
    padding-top: 16px;
    padding-bottom: 24px;
    border-top: 1px solid var(--color-background-mute);
  }
  &-items {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &-footer {
    padding-top: 18px;
    border-top: 1px solid var(--color-background-mute);
  }

  &__image {
    width: 130px;
    height: 130px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .item-name {
    background: linear-gradient(90deg, #3c3c3c 0%, #444444 51.04%, #333333 100%);
    border-radius: 8px;
  }
  .close-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
  .item-description {
    background: linear-gradient(90deg, #3c3c3c 0%, #444444 51.04%, #333333 100%);
    border-radius: 4px;
  }
}
</style>
