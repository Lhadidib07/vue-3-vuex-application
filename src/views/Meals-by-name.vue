<template>
  <div>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals by Name "
      @change="searchMeals" />
  </div>
  <div
    v-if="meals.length > 0"
    class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal=meal />
  </div>
  <div v-else class="text-center">no meal found</div>
</template>

<script setup>
import MealItem from "../components/MealItem.vue";

import { computed } from "vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "@/store";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
