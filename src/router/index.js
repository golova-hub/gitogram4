import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

export default createRouter({
  // способ, которым будут работать с данными
  history: createWebHashHistory(),
  routes
})
