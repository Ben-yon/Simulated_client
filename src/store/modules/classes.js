import { SHOULD_ADD_CLASS } from './../mutation-types';

const state = {
    actions: {
        addClass: false
    }
};

const getters = {
    shouldAddClass(state){
        return state.actions.addClass
    }
};

const mutations = {
    [SHOULD_ADD_CLASS](state,payload){
        state.actions.addClass = payload
    }
};

const actions = {
    shouldAddClass({ commit}, payload){
        commit(SHOULD_ADD_CLASS, payload)
    }
};

const namespaced = true;

export default{
    namespaced,
    actions,
    mutations,
    getters, 
    state
}