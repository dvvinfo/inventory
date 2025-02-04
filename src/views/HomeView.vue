<script setup lang="ts">
import ItemDetails from '@/components/ItemDetails.vue';
import InventoryItems from '@/components/InventoryItems.vue';
import { useInventoryStore } from "../stores/inventory";
import HeroProfile from '@/components/HeroProfile.vue';
import BaseModal from '@/components/BaseModal.vue';
import BaseInput from '@/components/BaseInput.vue';
import { ref } from 'vue';
const hero = {
  id: 1,
  name: '',
  image: '/img/Img.png',
  description: ''
};

const model = ref('');
const inventoryModal = ref();


const store = useInventoryStore();


</script>

<template>
  <div class="container">
    <HeroProfile :hero="hero" />
    <InventoryItems />
    <ItemDetails v-if="store.selectedItem" :item="store.selectedItem" @close="store.selectItem(null)" @delete="store.deleteItem" />
    <BaseModal ref="inventoryModal">
      <BaseInput type="text" placeholder="Введите количество" v-model="model" class="input" />
    </BaseModal>
</div>
</template>
<style scoped lang="scss">
.container {
  position: relative;
  padding: 32px 32px 120px 32px;
  display: flex;
  gap: 24px;
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
}
.input {
  max-width: 700px;
}
</style>
