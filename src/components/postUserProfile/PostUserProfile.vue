<template>
<div class="g-dflex-center">
  <div class="post-avatar">
    <img :src="postAvatar" class="post-user-avatar" alt="User avatar" />
  </div>
  <div class="post-username">{{ postLogin }}</div>
  </div>
</template>

<script>

export default {
  name: 'PostUserProfile',
  template: 'PostUserProfile',
  props: {
    postAvatar: {
      type: String,
      requaired: true
    },
    postLogin: {
      type: String,
      requaired: true
    }
  }
}
</script>
<style lang="scss" scoped src="./PostUserProfile.scss"></style>
