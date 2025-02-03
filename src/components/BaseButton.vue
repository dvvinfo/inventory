<script setup lang="ts">
defineProps<{
  label: string
  type?: 'danger' | 'cancel'
}>()
</script>

<template>
  <button :class="['base-button', type]">
    <slot>{{ label }}</slot>
  </button>
</template>

<style lang="scss">
.base-button {
  padding: 8px 15px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;
  text-align: center;
  line-height: 16.7px;
  &:hover {
    opacity: 0.8;
  }
  &.danger {
    background-color: var(--vt-c-red);
    color: var(--vt-c-white);
  }

  &.cancel {
    background-color: var(--color-background-btn);
    color: var(--color-text);
  }
}
</style>
