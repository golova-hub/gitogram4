<template>
  <div class="topline">
    <top-line>
      <template #headline>
        <!-- <button @click="getUser()">get user</button> -->
       <div class="icon-logo">
         <icon-comp name="LogoIcon"/>
        </div>
        <div class="icon-home">
         <icon-comp name="HomeIcon"/>
        </div>
        <div class="profile-photo">
         <profile-photo></profile-photo>
        </div>
        <div class="icon-exit">
         <icon-comp name="ExitIcon"/>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="item in $store.state.items.items" :key="item.id">
            <story-user-item
            v-bind="getPostsData(item)"
            >
            </story-user-item>
          </li>
        </ul>
      </template>
    </top-line>
  </div>
  <div class="g-container">
    <!-- <router-link to="/slider">link</router-link> -->
    <!-- <button @click="trigger">click</button>-->
     <!-- <pre>{{$store.state.items}}</pre> -->
    <div class="post-item">
      <!-- формируем цикл v-for с ключом по id -->
      <div class="post-item" v-for="item in $store.state.items.items" :key="item.id">
         <!-- внутрь компонента передаем данные, отделяем данные :postAvatar="item.owner.avatar_url" и параметры (передаем отдельно) -->
        <post-item v-bind="getPostsData(item)">
        <!-- <post-item> -->
          <template #taskcard>
            <div class="taskcard-title">Vue.js</div>
            <p class="taskcard-tasktext">{{item.description}}</p>
            <post-item-btns></post-item-btns>
          </template>
        </post-item>
      </div>
    </div>
  </div>
</template>

<script>
import { TopLine } from '../../components/topline/'
import { IconComp } from '../../icons/'
import { StoryUserItem } from '../../components/storyUserItem/'
import { ProfilePhoto } from '../../components/profilePhoto/'
import { PostItem } from '../../components/postItem/'
import { PostItemBtns } from '../../components/postItemBtns/'
// import stories from './data.json'
// import { mapState } from 'vuex'

export default {
  name: 'MainFeeds',
  components: {
    TopLine,
    IconComp,
    StoryUserItem,
    ProfilePhoto,
    PostItem,
    PostItemBtns
  },
  // из файла json
  // data () {
  //   return {
  //     stories
  //   }
  // },
  methods: {
    // вынесем данные из шаблона, чтобы удобнее структурировать, убираем кавычки
    getPostsData (item) {
      return {
        postId: item.id,
        postAvatar: item.owner.avatar_url,
        postUsername: item.name,
        postDescription: item.description,
        postLogin: item.owner.login
      }
    },
    // авторизация - тут полученный токкен передаем в виде заголовка
    // при помощи библиотеки axios можно сразу устаовить все заголовки запросов
    async getUser () {
      try {
        const response = await fetch('https://api.github.com/user', {
          headder: {
            Authorization: `token ${localStorage.getItem('token')}`
          }
        })
        const data = await response.json()
        const { token } = data
        // eslint-disable-next-line
        console.log(token)
      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
      }
    }
  },
  // чтобы работал из стора. это не метод, а хук - dispatch выводить вне методов! запрос смотрим в network
  created () {
    this.$store.dispatch('items/GET_USER_DATA')
  }
  // async getUser () {
  //   try {
  //     const response = await fetch('https://api.github.com/user')
  //     const data = await response.json
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
}
</script>
<style scoped lang="scss" src="./MainFeeds.scss"></style>
