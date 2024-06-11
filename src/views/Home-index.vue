<template>
  <div class="flex flex-col p-8">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full my-5"
      placeholder="Search for Meals" />
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import Meals from "../components/Meals-onDemande.vue";

// import { computed } from 'vue';
// import store from '@/store'; // Adjust the path as necessary to point to your store file
// const meals = computed(() => store.state.meals);

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});

//const ingredients = ref([]);
</script>
