<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingerdients</h1>
    <div>
      <input
        type="text"
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="Search for meals by Name " />
    </div>

    <div
      v-for="ingredient of computedIngredients"
      class="bg-white rounded p-3 mb-3 shadow block"
      :key="ingredient.id">
      <router-link
        :to="{
          name: 'mealsByIngredient',
          params: { id: ingredient.strIngredient },
        }">
        <h3 class="text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
        <p>{{ ingredient.strDescription }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axiosClient from "../axiosClient";

const ingredients = ref([]);

const keyword = ref('');
const computedIngredients = computed(() => {
  // Check if keyword has a value; if not, return all ingredients
  if (!keyword.value) return ingredients.value;
  return ingredients.value.filter(i =>
    (i.strDescriptions || '').toLowerCase().includes(keyword.value.toLowerCase()) ||
    (i.strIngredient || '').toLowerCase().includes(keyword.value.toLowerCase())
  );
});
onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
