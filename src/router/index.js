import { createRouter, createWebHashHistory } from "vue-router";
import home from "../views/Home-index.vue";
import MealLetter from "../views/Meals-Letter.vue";
import MealByName from "../views/Meals-by-name.vue";
import DefaultLayout from "../components/DefaultLayout.vue"
import mealDetails from "../views/Meal-details.vue";

import Ingredient from "../views/Ingerdient-meal.vue";
import MealsByIngredient from  "../views/Meal-by-ingerdient.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: home,
      },
      {
        path: "/letter/:letter?",
        name: "byLetter",
        component: MealLetter,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealByName,
      },
      {
        path:'/meal/:id',
        name:'mealDetails',
        component:mealDetails
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredient,
      },
      {
        path: "/mealsByIngredient/:id?",
        name: "mealsByIngredient",
        component: MealsByIngredient,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
