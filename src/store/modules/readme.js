// import { getRepositories } from '../../api/rest/searchRepo'
import { getRepoReadme } from '../../api/rest/readmeRepo'

export default {
  namespaced: true,
  state: {
    repos: []
  },
  getters: {
    getRepositoryByIndex: (state) => (index) => {
      return state.repositories[index]
    }
  },
  mutations: {
    SET_REPOS (state, repos) {
      state.repos = repos
    }
  },
  actions: {
    // Заполнение списка репозиториев
    async fetchRepositories ({ commit }) {
      const repos = (await getRepoReadme()).data
      console.log(repos)
      commit('SET_REPOS', repos)
    }
  }
}
