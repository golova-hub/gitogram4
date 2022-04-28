/* eslint-disable */
import * as api from '../../api'

export default {
  namespaced: true,
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
    async GET_USER_DATA ({ commit }) {
      try {
        const { data } = await api.trendings.getTrendings()
        // когда запрос выполнится, надо выполнить мутацию
        commit('SET_USER_DATA', data.items)
      } catch (error) {
        console.log(error)
      }
    }
    // async GET_README (store, { id, owner, repo }) {
    //   try {
    //     const { data } = await readmeRepo({ owner, repo })
    //     console.log(data)
    //   } catch (error) {
    //     console.log(error)
    //     throw error
    //   }
    // }
  }
}
