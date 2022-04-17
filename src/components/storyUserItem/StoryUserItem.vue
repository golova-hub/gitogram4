<template>
<!-- переход по клику в методе, роутер -->
  <button @click="showModal" class="stories-avatar-btn">
    <div class="avatar">
      <img :src="postAvatar" class="img" alt="User avatar" />
    </div>
    <div class="username">{{ postLogin }}</div>
  </button>
  <!-- импортируем компонент модалки, убираем если используем роутер -->
  <!-- <slider-user-story ref="modal" :showStories='showStories' @close='closeModal()'></slider-user-story> -->
</template>
<script>
// import { SliderUserStory } from '../../components/sliderUserStory/'

export default {
  name: 'StoryUserItem',
  template: 'StoryUserItem',
  components: {
    // SliderUserStory
  },
  // данные первого запроса дсотупны из родительского компонента, просто передаем пропсы сюда
  props: {
    postAvatar: {
      type: String,
      requaired: true
    },
    postLogin: {
      type: String,
      requaired: true
    }
  },
  methods: {
    showModal () {
      this.$router.push('/slider')
    }
  }
}
</script>

<style scoped lang="scss" src="./StoryUserItem.scss"></style>
