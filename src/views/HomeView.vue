<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import InventoryItem from '@/components/InventoryItem.vue';
import { ref } from 'vue';
const items = ref([
    { id: 1, name: "Зелёный куб", x: 0, y: 0, image: "/img/1.png", count: 2 },
    { id: 2, name: "Коричневый куб", x: 1, y: 0, image: "/img/2.png", count: 1 },
    { id: 3, name: "Синий куб", x: 2, y: 0, image: "/img/3.png", count: 2 },
  ]);
</script>

<template>
  <h1>Home</h1>
  <BaseButton  type="cancel" label="Click me" />
  <InventoryItem v-for="item in items" :key="item.id" :item="item" @click="console.log(item.id)" />
</template>
