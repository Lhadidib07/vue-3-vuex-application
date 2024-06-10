<template>
  <div v-if="meals" class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-else class="text-center">no meal found</div>
</template>

<script setup>
import MealItem from "./MealItem.vue";

const { meals } = defineProps({
  meals: {
    required: true,
    type: Object,
  },
});
</script>
