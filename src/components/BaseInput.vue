<script setup lang="ts">
defineProps<{
  modelValue: string | number | null
  min?: number
  max?: number
  placeholder?: string
  type: 'text' | 'number' | 'password' | 'email'
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input
    v-if="type === 'number'"
    :type="type"
    :value="modelValue"
    :min="min"
    :max="max"
    @input="emit('update:modelValue', Number(($event.target as HTMLInputElement).value))"
    class="base-input"
    :placeholder="placeholder"
  />
  <input
    v-else
    :type="type"
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="base-input"
    :placeholder="placeholder"
  />
</template>

<style scoped>
.base-input {
  width: 100%;
  background-color: var(--color-background-block);
  color: var(--vt-c-black-mute);
  padding: 12px;
  border: 1px solid var(--color-background-mute);
  border-radius: 8px;
  outline: none;
  -moz-appearance: textfield;
  appearance: textfield;
}
.base-input::-webkit-outer-spin-button,
.base-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
