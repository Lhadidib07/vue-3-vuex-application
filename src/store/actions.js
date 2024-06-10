import axiosClient from '@/axiosClient';

export function searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({ data }) => {
            commit('setSearchedMeals', data.meals);
        });
}

export function searcheMealsByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`)
        .then(({ data }) => {
            commit('setSearcheMealsByLetter', data.meals);
        });
}


export function searcheMealsByIngredient({ commit }, ingredient) {
    axiosClient.get(`filter.php?i=${ingredient}`)
        .then(({ data }) => {
            commit('setSearcheMealsByIngredient', data.meals);
        });
}