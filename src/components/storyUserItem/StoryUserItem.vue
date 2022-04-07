<template>
  <button @click="showModal" class="stories-avatar-btn">
    <div class="avatar">
      <img :src="avatar" class="img" alt="User avatar" />
    </div>
    <div class="username">{{ username }}</div>
  </button>
  <!-- импортируем компонент модалки -->
  <slider-user-story ref="modal" :showStories='showStories' @close='closeModal()'></slider-user-story>
</template>
<script>
import { SliderUserStory } from '../../components/sliderUserStory/'

export default {
  name: 'StoryUserItem',
  template: 'StoryUserItem',
  components: {
    SliderUserStory
  },
  props: {
    avatar: {
      type: String,
      requaired: true
    },
    username: {
      type: String,
      requaired: true
    }
  },
  // обрабатываем события по клику
  methods: {
    showModal () {
      this.showStories = true
    },
    closeModal (close) {
      this.showStories = close
    }
  },
  // data - задаем значение по умолчанию при загрузке страницы - сториз скрыты
  data () {
    return {
      showStories: false
    }
  }
}
</script>

<style scoped lang="scss" src="./StoryUserItem.scss"></style>
