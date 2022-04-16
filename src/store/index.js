import { createStore } from 'vuex'
import items from './modules/items'
import readme from './modules/readme'

export default createStore({
  modules: {
    items,
    readme
  }
})
