<template>
  <div class="g-dflex-center">
    <div class="main-info">
      <div class="icon-logo">
        <icon-comp name="LogoIcon"/>
      </div>
      <p class="auth-txt">More than just one repository.<br>This is our digital world.</p>
      <button class="g-btn theme-green" @click="getCode">
        <span class="btn-text">
          Authorize with github
        </span>
        <div class="icon-github">
          <icon-comp name="GithubIcon"/>
        </div>
      </button>
    </div>
    <div class="main-img">
      <img src="../../../public/images/main.png" alt="Главная" />
    </div>
  </div>
</template>

<script>
import { IconComp } from '../../icons/'

const clientId = 'ae6368b837d83022b977'
const clientSecret = '17dac71d7f3adfdbece7719d87699b214e2ffe25'

export default {
  name: 'AuthUser',
  components: {
    IconComp
  },
  methods: {
    getCode () {
      // перенаправить на страницу гитхаба, чтобы там он ввел данные
      const githubAuthApi = 'https://github.com/login/oauth/authorize'
      // показать какое приложение будет запрашивать доступ, передаем сюда clientId
      const params = new URLSearchParams()
      params.append('client_id', clientId)
      // набор данных, к которым приложение получит доступ, читай на гитхаб
      params.append('scope', 'repo:status read:user')
      window.location.href = `${githubAuthApi}?${params}`
    }
  },
  // нас будет перенаправлять назад, поэтому будут срабатывать хуки
  // проверим есть ли код
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')
    // если есть код, то выполним еще запрос
    if (code) {
      try {
        // передаем запрос на обмен кода на токен, надо делать с сервера - сейчасс с локальной машины
        const response = await fetch('https://webdev-api.loftschool.com/github', {
          method: 'POST',
          mode: 'cors',
          headers: {
            // если используется библиотека, этот заголовок будет передан автоматически
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            clientId,
            code,
            clientSecret
          })
        })
        // нам вернеется токен
        // при запросе с fetch api необходимо преобразовать ответ
        // console.log(response)
        // const { token } = response
        // console.log({ token })
        const json = await response.json()
        const { token } = json
        // console.log(token)
        // чтобы использовать токен на других страничках, надо сохранить
        localStorage.setItem('token', token)
        // при удачном логине перенаправить пользователя на нужную страницу внутри
        this.$router.replace({ path: '/' })
      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .g-dflex-center {
    min-height: 100vh;
  }
  .icon-logo {
    width: 200px;
  }
  .g-btn {
    min-width: initial;
    margin-top: 22px;
    white-space: nowrap;
    display: flex;
    align-items: center;
  }
  .icon-github {
    width: 23px;
    height: 23px;
    margin-left: 12px;
  }
  .auth-txt {
    color: #6F6F6F;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 54px;
  }
  .main-info {
    min-width: 50%;
    max-width: 50%;
    width: 50%;
    padding-left: 10vw;
  }
</style>
