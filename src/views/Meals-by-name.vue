<template>
  <div>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full my-5 "
      placeholder="Search for meals by Name "
      @change="searchMeals" />
  </div>
  <Meals :meals="meals"/>
</template>

<script setup>
import Meals from "../components/Meals-onDemande.vue";

import { computed } from "vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "@/store";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if(keyword.value){ 
    store.dispatch("searchMeals", keyword.value);
  }else{ 
      store.dispatch("setSearchedMeals",[]);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
