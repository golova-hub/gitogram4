// укажим когда какой компонет открывать
// импортируем необходимый файл страницы
import MainFeeds from '../pages/mainfeeds/MainFeeds.vue'
import SliderUserStory from '../components/sliderUserStory/SliderUserStory.vue'
import { AuthUser } from '@/components/auth'

export default [
  { path: '/', component: MainFeeds },
  { path: '/slider', component: SliderUserStory },
  { path: '/auth', component: AuthUser }
]
