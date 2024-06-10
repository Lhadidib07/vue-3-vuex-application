<template>
  <header class="bg-white shadow-sm h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-2 transition-colors hover:bg-purple-200">
      homme
    </router-link>
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-purple-100"
      >
        Meals by Name
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-purple-100"
        >Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-purple-200"
        >Meals By Ingredient</router-link
      >
    </div>
  </header>
</template>
