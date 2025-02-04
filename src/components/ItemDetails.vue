<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import BaseBlock from './BaseBlock.vue'
import BaseButton from './BaseButton.vue'
import BaseInput from './BaseInput.vue'

const props = defineProps<{
  item: { id?: number; name?: string; image?: string; count?: number; description?: string } | null
}>()

const emit = defineEmits(['close', 'delete'])

const showDeleteBlock = ref(false)
const deleteAmount = ref<number | null>(null)

const maxCount = computed(() => props.item?.count ?? 1)

const confirmDelete = () => {
  if (!props.item?.id || deleteAmount.value === null || deleteAmount.value < 1) return

  emit('delete', props.item.id, deleteAmount.value)
  showDeleteBlock.value = false
}

// Сбрасываем deleteAmount при открытии блока удаления
const openDeleteBlock = () => {
  deleteAmount.value = null
  showDeleteBlock.value = true
}

// Обработчик для закрытия по Esc
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('close')
  }
}

// Добавляем обработчик при монтировании компонента
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

// Удаляем обработчик при размонтировании компонента
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
        <BaseBlock size="xxl">{{ item.description }}</BaseBlock>
        <BaseBlock size="xxl">{{ item.description }}</BaseBlock>
        <BaseBlock size="xxl">{{ item.description }}</BaseBlock>
        <BaseBlock size="xl">{{ item.description }}</BaseBlock>
        <BaseBlock size="xs">{{ item.description }}</BaseBlock>
      </div>
    </div>
    <BaseButton
      v-if="!showDeleteBlock"
      label="Удалить предмет"
      type="danger"
      @click="openDeleteBlock"
    />

    <!-- Блок удаления -->
    <div v-if="showDeleteBlock" class="delete-block">
      <BaseInput
        type="number"
        placeholder="Введите количество"
        v-model.number="deleteAmount"
        :min="1"
        :max="maxCount"
      />
      <div class="delete-block__info">
        <BaseButton label="Отмена" type="cancel" @click="showDeleteBlock = false" />
        <BaseButton label="Подтвердить" type="danger" @click="confirmDelete" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.item-details {
  position: relative;
  width: 250px;
  height: 498px;
  padding: 55px 15px 18px 15px;
  position: absolute;
  top: 32px;
  right: 0;

  background: var(--color-background-block);
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

  .close-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    svg path {
      fill: var(--color-fill);
    }
  }
}

.delete-block {
  background-color: var(--color-background-block);
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 20px;
  border: 1px solid var(--color-background-mute);
  border-bottom-right-radius: 12px;
  text-align: center;

  &__info {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
}
</style>
