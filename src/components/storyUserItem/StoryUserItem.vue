<template>
  <button @click="showModal" class="stories-avatar-btn">
    <div class="avatar">
      <img :src="avatar" class="img" alt="User avatar" />
    </div>
    <div class="username">{{ username }}</div>
  </button>
  <slider-user-story ref="modal" :show='show'></slider-user-story>
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
  methods: {
    showModal: function () {
      this.$refs.modal.showStories = true
    }
  },
  data () {
    return {
      showStories: true
    }
  }
}
</script>

<style scoped lang="scss" src="./StoryUserItem.scss"></style>
