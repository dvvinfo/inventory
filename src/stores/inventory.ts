import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

interface InventoryItem {
  id?: number
  name?: string
  x: number
  y: number
  image?: string
  count?: number
  description?: string
}

export const useInventoryStore = defineStore('inventory', () => {
  // Загружаем данные из localStorage или создаем пустой инвентарь
  const storedItems = localStorage.getItem('inventory')
  const defaultItems: InventoryItem[] = [
    { id: 1, name: '', x: 0, y: 0, image: '/img/1.png', count: 2, description: '' },
    { id: 2, name: '', x: 1, y: 0, image: '/img/2.png', count: 1, description: '' },
    { id: 3, name: '', x: 2, y: 0, image: '/img/3.png', count: 2, description: '' },
    ...Array(22).fill({ x: 0, y: 0 }), // Заполняем пустыми ячейками
  ]

  const items = ref<InventoryItem[]>(storedItems ? JSON.parse(storedItems) : defaultItems)

  const selectedItem = ref<InventoryItem | null>(null)

  const selectItem = (id: number | null) => {
    selectedItem.value = items.value.find((item) => item.id === id) || null
  }

  const deleteItem = (id: number, amount: number) => {
    items.value = items.value.map((item) => {
      if (item.id === id) {
        const newCount = (item.count || 0) - amount
        if (newCount > 0) {
          return { ...item, count: newCount } // Обновляем количество, если оно больше 0
        } else {
          return { x: item.x, y: item.y } // Оставляем пустую ячейку
        }
      }
      return item
    })
  }

  const updateItemPosition = (fromIndex: number, toIndex: number) => {
    const itemToMove = items.value[fromIndex]

    if (!itemToMove.id) return // Если нет предмета, ничего не делаем

    const targetItem = items.value[toIndex]

    if (!targetItem.id) {
      // Если целевая ячейка пустая, перемещаем предмет
      items.value[toIndex] = { ...itemToMove, x: toIndex % 5, y: Math.floor(toIndex / 5) }
      items.value[fromIndex] = { x: fromIndex % 5, y: Math.floor(fromIndex / 5) } // Очищаем старое место
    }
  }

  // Автосохранение в localStorage
  watch(
    items,
    () => {
      localStorage.setItem('inventory', JSON.stringify(items.value))
    },
    { deep: true },
  )

  return { items, selectedItem, selectItem, deleteItem, updateItemPosition }
})
