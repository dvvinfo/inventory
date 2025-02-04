<template>
  <div class="hero-profile">
    <div class="hero-profile-image">
      <img :src="hero.image" :alt="hero.name" />
    </div>
    <div class="hero-profile-container">
      <BaseBlock size="fluid">
        {{ hero.name }}
      </BaseBlock>
      <div class="hero-profile-info">
        <BaseBlock size="md">
          {{ hero.description }}
        </BaseBlock>
        <BaseBlock size="xxl">
          {{ hero.description }}
        </BaseBlock>
        <BaseBlock size="lg">
          {{ hero.description }}
        </BaseBlock>
        <BaseBlock size="md">
          {{ hero.description }}
        </BaseBlock>
        <BaseBlock size="sm">
          {{ hero.description }}
        </BaseBlock>
        <BaseBlock size="xs" class="hero-profile__last-block">
          {{ hero.description }}
        </BaseBlock>
      </div>
    </div>

    <h2>{{ hero.name }}</h2>

    <p>{{ hero.description }}</p>

  </div>
</template>

<script lang="ts" setup>
import BaseBlock from './BaseBlock.vue';

defineProps<{
  hero: { id: number; name: string; image: string;  description?: string };

}>()

</script>

<style scoped lang="scss">
.hero-profile{
  max-width: 236px;
  width: 100%;
  padding: 18px 14px 24px 14px;
  background: var(--color-background-block);
  border-radius: 16px;
  border: 1px solid var(--color-background-mute);
  color: var(--color-text);
  text-align: center;

  &-image {
    width: 208px;
    height: 240px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-container {
    margin-top: 20px;
  }
  &-info {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    &__last-block {
      margin-top: 16px;
    }
  }
}

</style>
