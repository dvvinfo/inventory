import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useInventoryStore = defineStore("inventory", () => {
  const items = ref([
    { id: 1, name: "", x: 0, y: 0, image: "/img/1.png", count: 2, description: "" },
    { id: 2, name: "", x: 1, y: 0, image: "/img/2.png", count: 1, description: "" },
    { id: 3, name: "", x: 2, y: 0, image: "/img/3.png", count: 2, description: "" },
    ...Array(22).fill({}) // Заполняем пустыми ячейками
  ]);

  const selectedItem = ref(null);

  const selectItem = (id: number| null) => {
    selectedItem.value = items.value.find((item) => item.id === id) || null;
  };

  const deleteItem = (id: number) => {
    items.value = items.value.map((item) => (item.id === id ? {} : item));
    selectedItem.value = null;
  };

  const updateItemPosition = (fromIndex: number, toIndex: number) => {
    const itemToMove = items.value[fromIndex];

    if (!itemToMove.id) return; // Если нет предмета, ничего не делаем

    const targetItem = items.value[toIndex];

    if (!targetItem.id) {
      // Если целевая ячейка пустая, просто перемещаем
      items.value[toIndex] = { ...itemToMove, x: toIndex % 5, y: Math.floor(toIndex / 5) };
      items.value[fromIndex] = {}; // Очищаем старое место
    }
  };

  watch(items, () => {
    localStorage.setItem("inventory", JSON.stringify(items.value));
  }, { deep: true });

  return { items, selectedItem, selectItem, deleteItem, updateItemPosition };
});
