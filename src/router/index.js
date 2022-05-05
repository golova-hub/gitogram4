import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  // чтобы не вызывать это на странице аввторизации, мы получим эту инфу
  // можно по имени или пути узнать, куда хотят перейти
  // если это страница авторизации, то сразу вызываем next, и тогда try не будет выполняться
  const authRout = to.path === '/auth'
  if (authRout) {
    next()
    return
  }
  try {
    // чтобы проверить, прошел ли пользователь авторизацию, отправим запрос, котоорый проссто так бы нее получили
    // например, запрос на пользоввателя токен
    // вернет ошибку, если токен не был передан
    const response = await fetch('https://api.github.com/user', {
      headder: {
        Authorization: `token ${localStorage.getItem('token')}`
      }
    })
    // чтобы выкинуть ошибку, проверим статус ответа гитхаб
    if (response.status === 401) throw new Error()
    // to and from are both route objects. must call `next`.
    // позволим пользователю пройти на роут
    next()
  } catch (error) {
    // если ошибка - тоже вызывает netx, но направляеем его на страницу авторизации
    next({ path: '/auth' })
  }
  // проверить, прошел ли пользователь авторизацию
})

export default router
