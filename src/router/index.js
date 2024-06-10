import { createRouter, createWebHashHistory } from "vue-router";
import home from "../views/Home-index.vue";
import MealLetter from "../views/Meals-Letter.vue";
import MealByName from "../views/Meals-by-name.vue";
import MealByIngredient from "../views/Meals-by-ingerdient.vue";
import DefaultLayout from "../components/DefaultLayout.vue"
import mealDetails from "../views/Meal-details.vue"; 

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
        path: "/by-ingredient/:ingerident?",
        name: "byIngredient",
        component: MealByIngredient,
      },
      {
        path:'/meal/:id',
        name:'mealDetails',
        component:mealDetails
      }
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
