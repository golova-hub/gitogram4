// import { getRepositories } from '../../api/rest/searchRepo'
import { getRepoReadme } from '../../api/rest/readmeRepo'

export default {
  namespaced: true,
  state: {
    repos: [],
    users: []
  },
  getters: {
    getRepositoryByIndex: (state) => (index) => {
      return state.repositories[index]
    }
  },
  mutations: {
    SET_REPOS (state, payload) {
      state.isLoaded = payload
    }
  },
  actions: {
    // Заполнение списка репозиториев
    async fetchRepositories (store, payload) {
      const repos = (await getRepoReadme(payload)).data.items
      console.log(repos)
      store.commit('SET_REPOS', true)
    }
  }
}
