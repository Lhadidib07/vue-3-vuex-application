<template>
    <div>
        <input type="text"
         v-model="keyword"
         class="rounded border-2 border-gray-200 w-full"
         placeholder="Search for meals "
         @change="searchMeals"
        >
    </div>
    <div>
        {{ meals }}
    </div>
</template>

<script setup>
//import axiosClient from '@/axiosClient';
import {ref , computed} from 'vue'; 
import store from '@/store';

const keyword = ref(''); 
const meals = computed(() => store.state.searchedMeals);

function searchMeals(){ 
    store.dispatch('searchMeals',keyword.value)
}
</script>