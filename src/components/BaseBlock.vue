<template>
  <div :class="['base-block', size]">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  size?: 'fluid' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
}>()
</script>

<style scoped lang="scss">
.base-block {
  background: var(--linear-gradient);
  color: var(--color-text);
  margin: 0 auto;
  &.fluid {
    width: 100%;
    height: 30px;
    border-radius: 8px;
  }
  &.xxl {
    width: 100%;
    height: 10px;
    border-radius: 4px;
  }
  &.xl {
    width: 180px;
    height: 10px;
    border-radius: 4px;
  }
  &.lg {
    width: 170px;
    height: 10px;
    border-radius: 4px;
  }
  &.md {
    width: 160px;
    height: 10px;
    border-radius: 4px;
  }
  &.sm {
    width: 140px;
    height: 10px;
    border-radius: 4px;
  }
  &.xs {
    width: 80px;
    height: 10px;
    border-radius: 4px;
  }

}
</style>
