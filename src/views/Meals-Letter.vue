<template>
  <div>
    <div class="flex justify-center gap-2 mt-2 my-5">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
         v-for="(letter, index) in Letters"
        :key="index">
        {{ letter }}
      </router-link>
    </div>
  </div>
  <div
    v-if="meals"
    class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal=meal />
  </div>
  <div v-else class="text-center">no meal found</div>
</template>

<script setup>

import MealItem from "../components/MealItem.vue";
import {computed, onMounted, watch} from 'vue';
import { useRoute } from 'vue-router';
import store from '../store'; 

const route = useRoute(); 
const Letters = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'.split(""); 
const meals = computed(() => store.state.searcheMealsByLetter); 

watch(route,()=>{ 
    store.dispatch('searcheMealsByLetter',route.params.letter);
}),

onMounted(() => { 
  store.dispatch('searcheMealsByLetter',route.params.letter);
})

</script>
