<template>
  <div class="post-avatar">
    <img :src="postAvatar" class="post-user-avatar" alt="User avatar" />
  </div>
  <div class="post-username">{{ postUsername }}</div>
</template>

<script>

export default {
  name: 'PostUserProfile',
  template: 'PostUserProfile',
  data () {
    return {
      postAvatar: 'https://picsum.photos/300/300',
      postUsername: 'joshua_l'
    }
  }
}
</script>
<style lang="scss" scoped src="./PostUserProfile.scss"></style>
