<template>
<!-- переход по клику в методе, роутер -->
  <button @click="showModal" class="stories-avatar-btn">
    <div class="avatar">
      <img :src="avatar" class="img" alt="User avatar" />
    </div>
    <div class="username">{{ username }}</div>
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
  methods: {
    showModal () {
      this.$router.push('/slider')
    }
  }
}
</script>

<style scoped lang="scss" src="./StoryUserItem.scss"></style>
