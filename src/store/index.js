import { createStore } from 'vuex'
import * as api from '../api'

export default createStore({
  state: {
    // положить данные из запроса в массив
    items: []
  },
  getters: {
    // получим данные в компонент
    USERS (state) {
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
      console.log(api)
      try {
        const { data } = await api.trendings.getTrendings()
        this.items = data.items
      } catch (error) {
        console.log(error)
      }
      // вызываем метод api.trendings.getTrendings()
      api.trendings.getTrendings()
      // когда запрос выполнится, надо выполнить мутацию
      commit('SET_USER_DATA', this.items)
      return this.items
    }
  }
})
