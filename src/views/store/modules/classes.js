import { SHOULD_ADD_CLASSES } from './../modules'

const state ={
    actions:{
        addClass: true
    }
};

const getters = {
    shouldAddClass(state){
        return state.actions.addClass;
    }
}; 

const mutation = {
    [ SHOULD_ADD_CLASSES](state, payload){
        state.actions.shouldAddClass = payload;
    }

};

const actions = {
    shouldAddClass({ commit }, payload){
        commit(SHOULD_ADD_CLASSES, payload)
    }

};

const namespaced = true;

export default{
    namespaced,
    actions,
    mutation,
    getters,
    state
}