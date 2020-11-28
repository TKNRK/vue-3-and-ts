import { createStore, Store } from 'vuex'
import hoge from './modules/hoge'

export interface State {
  count: number
}

export default createStore({
  modules: {
    hoge
  },
});