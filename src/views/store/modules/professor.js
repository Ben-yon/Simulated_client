import {SHOULD_ADD_PRO} from './../mutation-types';

const state ={
    actions:{
         addPro:false
    }
   
};

const getters = {
    shouldAddPro(state){
        return state.actions.addPro
    }
};

const mutations={
    [SHOULD_ADD_PRO](state,payload){
        state.actions.addPro = payload;
    }
};

const actions={
    shouldAddPro({ commit }, payload){
        commit(SHOULD_ADD_PRO, payload);
    }
};

const namespaced =  true;

export default{
    namespaced,
    state,
    getters, 
    mutations,
    actions
}

