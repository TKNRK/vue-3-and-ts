import { State } from 'vue';

const state = {
    count: 1
}

const mutations = {
    increment(state: State) {
        state.count++;
    }
}

const getters = {
    count(state: State) {
        return state.count;
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    getters
}