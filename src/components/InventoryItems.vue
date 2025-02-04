<script setup lang="ts">
import InventoryItem from "./InventoryItem.vue";
import { useInventoryStore } from "../stores/inventory";

const store = useInventoryStore();

const selectItem = (id?: number) => {
  if (id !== undefined) {
    store.selectItem(id);
  }
};

// Получаем стили для закруглённых углов
const getCellStyle = (index: number) => {
  const styles: Record<string, string> = {};
  if (index === 0) styles["border-top-left-radius"] = "10px";
  if (index === 20) styles["border-bottom-left-radius"] = "10px";
  if (index === 4) styles["border-top-right-radius"] = "10px";
  if (index === 24) styles["border-bottom-right-radius"] = "10px";
  return styles;
};

// Drag-and-drop логика
const handleDragStart = (event: DragEvent, index: number) => {
  event.dataTransfer?.setData("text/plain", index.toString());
};

const handleDrop = (event: DragEvent, index: number) => {
  const fromIndex = Number(event.dataTransfer?.getData("text/plain"));
  store.updateItemPosition(fromIndex, index);
};

const allowDrop = (event: DragEvent) => {
  event.preventDefault();
};
</script>

<template>
  <div class="inventory-grid">
    <div
      v-for="(item, index) in store.items"
      :key="index"
      class="inventory-cell"
      :style="getCellStyle(index)"
      @drop="handleDrop($event, index)"
      @dragover="allowDrop"
    >
      <InventoryItem
        v-if="item.id"
        :item="item"
        :cellStyle="getCellStyle(index)"
        @click="selectItem(item.id)"
        @dragstart="handleDragStart($event, index)"
        draggable="true"
      />
    </div>
  </div>
</template>

<style lang="scss">
.inventory-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 525px;
  border: 1px solid var(--color-background-mute);
  border-radius: 12px;
  &:nth-last-child(-n+5) {
    border-top-left-radius: 12px;
  }

}

.inventory-cell {
  position: relative;
  width: 105px;
  height: 99px;
  border: 1px solid var(--color-background-mute);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 23px 26px;
  background-color: var(--color-background);
  cursor: pointer;
  &:hover {
    background-color: var(--color-background-mute);
  }


}
</style>
