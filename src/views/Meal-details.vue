<template>
  <div class="container w-[800px] mx-auto text-center">
    <h1 class="text-center text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full"/>
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2 text-center">
      <div><strong> Category </strong> : {{ meal.strCategory }}</div>
      <div><strong> Area </strong> : {{ meal.strArea }}</div>
      <div><strong> Tags </strong> : {{ meal.strTags }}</div>
    </div>
    <div>
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-2 md:grid-cols-2 my-2">
      <div class="text-center">
        <h2 class="text-2xl font-semibold mb-3">ingerediants</h2>
        <ul class="text-center">
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="text-center">
        <h2 class="text-2xl font-semibold mb-3">Mesures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strMeasure${ind + 1}`] != ''">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="text-center my-4 pb-4">
      <YoutubeButton :href="meal.strYoutube"
        >Go to Youtube Button</YoutubeButton
      >
      <a
        :href="meal.strSource"
        target="_blank"
        class="px-3 py-2 rounded border-2 text-indigo-700 hover:bg-indigo-200 transition-colors">
        <slot>view original source</slot>
      </a>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";
import axiosClient from "@/axiosClient";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  // Correctly use route.params.id in the request
  axiosClient
    .get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      // Safely assign the first meal or an empty object to meal
      meal.value = data.meals[0] || {};
    })
    .catch((error) => console.error(error)); // Handle potential errors
});
</script>
