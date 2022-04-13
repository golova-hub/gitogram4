import { createStore } from 'vuex'
import * as api from '../api'

export default createStore({
  state: {
    // положить данные из запроса в массив
    items: []
  },
  getters: {
    // получим данные в компонент
    ITEMS (state) {
      return state.items
    }
  },
  mutations: {
    // чтобы вывести объект в компонент, нужна мутация
    SET_USER_DATA (state, items) {
      state.items = items
    }
  },
  actions: {
    // async fetchUser (state) {
    //   try {
    //     const response = await fetch('https://api.github.com/repos/octocat/hello-world/readme')
    //     const data = await response.json()
    //     console.log(data)
    //   } catch (error) {

    //   }
    // },
    async GET_USER_DATA ({ commit }) {
      try {
        const items = await api.trendings.getTrendings()
        this.items = items
        // когда запрос выполнится, надо выполнить мутацию
        commit('SET_USER_DATA', items)
      } catch (error) {
        console.log(error)
      }
      // api.trendings.getTrendings()
      return this.items
    }
  }
})
