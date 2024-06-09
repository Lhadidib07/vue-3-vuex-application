import {createStore} from 'vuex'
import  state from './state'
import * as actions from './actions'
import * as mutation from './mutation'
import * as getters from './getters'




const store = createStore({ 
    state,
    actions,
    mutation,
    getters
})

export default store ; 