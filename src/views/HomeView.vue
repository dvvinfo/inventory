<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import InventoryItem from '@/components/InventoryItem.vue';
import ItemDetails from '@/components/ItemDetails.vue';
import { ref } from 'vue';
const items = ref([
    { id: 1, name: "", x: 0, y: 0, image: "/img/1.png", count: 2, descrption: "" },
    { id: 2, name: "", x: 1, y: 0, image: "/img/2.png", count: 1, descrption: "" },
    { id: 3, name: "", x: 2, y: 0, image: "/img/3.png", count: 2, descrption: "" },
  ]);
</script>

<template>
  <div class="container">
  <h1>Home</h1>
  <BaseButton  type="cancel" label="Click me" />
  <InventoryItem v-for="item in items" :key="item.id" :item="item" @click="console.log(item.id)" />
  <ItemDetails :item="items[0]" @close="console.log('close')" @delete="console.log('delete')" />
</div>
</template>
<style scoped lang="scss">
.container {
  position: relative;
}
</style>
