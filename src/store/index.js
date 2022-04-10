import { createStore } from 'vuex'
import * as api from '../api'

export default createStore({
  // state: {
  //   foo: 'bar'
  // },
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {
    async fetchUser (state) {
      try {
        const response = await fetch('https://api.github.com/repos/octocat/hello-world/readme')
        const data = await response.json()
        console.log(data)
      } catch (error) {

      }
    },
    async created () {
      console.log(api)
      try {
        const { data } = await api.trendings.getTrendings()
        this.items = data.items
      } catch (error) {
        // ошибку можно вывести в оповещение для пользователя
        console.log(error)
      }
      // вызываем метод api.trendings.getTrendings()
      // api.trendings.getTrendings()
    }
  }
})
