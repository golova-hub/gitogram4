<template>
   <div class="post-user-profile">
      <post-user-profile></post-user-profile>
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
