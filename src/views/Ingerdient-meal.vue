<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingerdients</h1>
    <div
      v-for="ingredient of ingredients"
      class="bg-white rounded p-3 mb-3 shadow block"
      :key="ingredient.id">
      <router-link
        :to="{ name: 'mealsByIngredient', params: { id: ingredient.strIngredient } }">
        <h3 class="text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
        <p>{{ ingredient.strDescription }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"; 
import axiosClient from "../axiosClient";

const ingredients = ref([]);

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
