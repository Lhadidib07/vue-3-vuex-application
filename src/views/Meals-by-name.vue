<template>
  <div>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals by Name "
      @change="searchMeals" />
  </div>
  <div v-if="meals.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
    <div
      v-for="meal in meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl hover:scale-105 transition-all">
      <router-link :to="{name:'mealDetails' ,params:{id:meal.idMeal }}">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover" />
      </router-link>
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>

        <div class="flex items-center justify-between">
         <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";
import { computed } from "vue";
import { onMounted,ref } from "vue";
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
    if(keyword.value){ 
      searchMeals()
    }
})
</script>
