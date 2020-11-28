type State = {
    count: number
}

const state: State = {
    count: 1
}

const mutations = {
    increment(state: State) {
        state.count++;
    }
}

const getters = {
    count(state: State): number {
        return state.count;
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    getters
}