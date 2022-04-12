<template>
  <div class="topline">
    <top-line>
      <template #headline>
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
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <story-user-item
            :avatar="story.avatar"
            :username="story.username"
            >
            </story-user-item>
          </li>
        </ul>
      </template>
    </top-line>
  </div>
  <div class="g-container">
    <pre>{{$store.state.items}}</pre>
    <!-- <button @click="trigger">click</button> -->
    <div class="post-item">
      <!-- формируем цикл v-for с ключом по id -->
      <div class="post-item" v-for="items in this.$store.state.items" :key="items.id">
         <!-- внутрь компонента передаем данные, отделяем данные :postAvatar="item.owner.avatar_url" и параметры (передаем отдельно) -->
        <post-item v-bind="getPostsData(item)">
          <template #taskcard>
            <div class="taskcard-title">Vue.js</div>
            <p class="taskcard-tasktext">{{item.description}}</p>
            <post-item-btns></post-item-btns>
          </template>
        </post-item>
      </div>
    </div>
    <!-- так можно распечатать массив запроса -->
    <!-- <div>
      <pre>{{items}}</pre>
    </div> -->
    <!-- так можно распечатать массив запроса - end -->
  </div>
</template>

<script>
import { TopLine } from '../../components/topline/'
import { IconComp } from '../../icons/'
import { StoryUserItem } from '../../components/storyUserItem/'
import { ProfilePhoto } from '../../components/profilePhoto/'
import { PostItem } from '../../components/postItem/'
import { PostItemBtns } from '../../components/postItemBtns/'
import stories from './data.json'
// import * as api from '../../api'
import { mapActions } from 'vuex'

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
  data () {
    return {
      stories,
      // // массив, куда сложим данные, полученный через api с github
      items: []
    }
  },
  methods: {
    ...mapActions([
      ''
    ]),
    showModal: function () {
      this.$refs.modal.show = true
    },
    // вынесем данные из шаблона, чтобы удобнее структурировать, убираем кавычки
    getPostsData (item) {
      return {
        postAvatar: item.owner.avatar_url,
        postUsername: item.name,
        postDescription: item.description
      }
    }
    // trigger () {
    //   // 1 вызовим метод
    //   this.$store.dispatch('fetchUser')
    // }
  },
  // чтобы работал из стора. это не метод, а хук - dispatch выводить вне методов! запрос смотрим в network
  created () {
    this.$store.dispatch('GET_USER_DATA')
  }
  // подключаем store
  // created () {
  //   console.log(
  //     this.$store.state.foo
  //   )
  // },
  // запускаем функцию, эмулирующую запрос, внутри нашего компонента, при создании компонента
  // добавляем async функцию, оборачиваем запрос в try catch и ловим данные
  // eslint-disable-next-line no-dupe-keys
  // /
  // переношу в экшенс в сторе
  // async created () {
  //   // провверяем вывод из стора
  //   // console.log(this.$store.state.foo)
  //   try {
  //     const { data } = await api.trendings.getTrendings()
  //     this.items = data.items
  //   } catch (error) {
  //     // ошибку можно вывести в оповещение для пользователя
  //     console.log(error)
  //   }
  //   // вызываем метод api.trendings.getTrendings()
  //   // api.trendings.getTrendings()
  // }
}
</script>
<style scoped lang="scss" src="./MainFeeds.scss"></style>
