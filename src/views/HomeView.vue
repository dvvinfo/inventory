<script setup lang="ts">
import ItemDetails from '@/components/ItemDetails.vue';
import InventoryItems from '@/components/InventoryItems.vue';
import { useInventoryStore } from "../stores/inventory";


const store = useInventoryStore();
</script>

<template>
  <div class="container">
    <InventoryItems />
    <ItemDetails v-if="store.selectedItem" :item="store.selectedItem" @close="store.selectItem(null)" @delete="store.deleteItem" />
</div>
</template>
<style scoped lang="scss">
.container {
  position: relative;
  padding: 32px;
}
</style>
