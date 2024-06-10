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
      <Meals :meals="meals"/>

  </div>
  
</template>

<script setup>

import Meals from "../components/Meals-onDemande.vue";

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
