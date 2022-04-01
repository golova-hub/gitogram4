<template>
  <div class="post-item-content">
    <div class="post-user-profile">
        <post-user-profile></post-user-profile>
    </div>
    <div class="taskcard">
      <slot name="taskcard" />
    </div>
  </div>
</template>
<script>

import { PostUserProfile } from '../../components/postUserProfile/'

export default {
  name: 'PostItem',
  components: {
    PostUserProfile
  },
  data () {
    return {
      postAvatar: '../../assets/images/ProfilePic.png',
      postUsername: 'joshua_l'
    }
  }
}
</script>
<style lang="scss" scoped src="./PostItem.scss"></style>
