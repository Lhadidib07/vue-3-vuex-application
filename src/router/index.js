import { createRouter, createWebHashHistory } from "vue-router";
import home from "../views/Home-index.vue";
import MealList from "../views/Meals-List.vue";
import MealByName from "../views/Meals-by-name.vue";
import MealByIngredient from "../views/Meals-by-ingerdient.vue";
import DefaultLayout from "../components/DefaultLayout.vue"

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
        component: MealList,
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
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
