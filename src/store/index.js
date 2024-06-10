import { createStore } from 'vuex';
import state from './state';
import * as actions from './actions';
import * as mutations from './mutation'; // Changez le nom de l'import pour correspondre à la convention
import * as getters from './getters';

const store = createStore({
    state,
    actions,
    mutations, // Utilisez mutations ici au lieu de mutation
    getters
});

export default store;