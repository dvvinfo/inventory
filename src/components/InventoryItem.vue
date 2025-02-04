<script setup lang="ts">
defineProps<{
  item: { id?: number; name?: string; image?: string; x: number; y: number; count?: number; description?: string };
  cellStyle: Record<string, string>;
}>();

const emit = defineEmits(["click"]);
</script>

<template>
  <div
    class="inventory-item"
    @click="emit('click', item.id)"
    :style="cellStyle"
    draggable="true"
  >
    <div class="item-img" v-if="item.image">
      <img :src="item.image" :alt="item.name || 'Предмет'" />
    </div>
    <div v-if="item.count && item.count > 0" class="item-count">{{ item.count }}</div>
  </div>
</template>

<style lang="scss">
.inventory-item {
  position: relative;
  width: 105px;
  height: 99px;
  border: 1px solid var(--color-background-mute);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 23px 26px;
  background-color: var(--color-background-block);
  cursor: pointer;



  &:hover {
    background-color: var(--color-background-mute);
  }


  .item-image {
    width: 54px;
    height: 54px;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .item-count {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 10px;
    line-height: 12px;
    font-weight: 500;
    padding: 4px;
    color: var(--color-background-mute);
    background-color: var(--color-background-block);
    border-top-left-radius: 6px ;
    border: 1px solid var(--color-background-mute);
  }
}
</style>
