<template>
   <Meals :meals="meals"/>
</template>

<script setup>

import Meals from "../components/Meals-onDemande.vue";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const meals = computed(() => store.state.searcheMealsByIngredients);

console.log("je suis dans le meal par ing " + route.params.id);

onMounted(() => {
  store.dispatch("searcheMealsByIngredient", route.params.id);
});
</script>
