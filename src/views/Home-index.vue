<template>
    <div class="flex flex-col p-8">
        <input type="text" 
         class="rounded border-2 border-gray-200 w-full" 
         placeholder="Search for Meals"
        >
        <div class="flex justify-center gap-2 mt-2">
            <router-link 
                :to="{name : 'byLetter' , params: {letter}}"  
                v-for="(letter, index) in Letters" :key="index"
            >
            {{ letter }}
            </router-link>
        </div>
        <pre>
            {{ ingredients }}
        </pre>
    </div>
</template>

<script setup>
import { onMounted , ref } from 'vue';
import axiosClient from '../axiosClient'

// import { computed } from 'vue';
// import store from '@/store'; // Adjust the path as necessary to point to your store file
// const meals = computed(() => store.state.meals); 

onMounted(async () => { 
   const reposnse = await axiosClient.get('list.php?i=list');
   console.log(reposnse.data);
   ingredients.value = reposnse.data ; 
})

const Letters = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'.split(""); 
const ingredients = ref([])
</script> 