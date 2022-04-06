<template>
  <button class="stories-avatar-btn">
    <div class="avatar">
      <img :src="avatar" class="img" alt="User avatar" />
    </div>
    <div class="username">{{ username }}</div>
  </button>
</template>
<script>

export default {
  name: 'StoryUserItem',
  template: 'StoryUserItem',
  props: {
    avatar: {
      type: String,
      requaired: true
    },
    username: {
      type: String,
      requaired: true
    }
  }
}
</script>

<style scoped lang="scss" src="./StoryUserItem.scss"></style>
