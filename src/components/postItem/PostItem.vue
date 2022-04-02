<template>
  <div class="post-item-content">
    <div class="post-user-profile">
        <post-user-profile></post-user-profile>
    </div>
    <div class="taskcard">
      <slot name="taskcard" />
    </div>
    <div class="post-comment-toggler">
      <post-comment-toggler v-on:textChanged="handler"></post-comment-toggler>
    </div>
  </div>
</template>
<script>

import { PostUserProfile } from '../../components/postUserProfile/'
import { PostCommentToggler } from '../../components/postCommentToggler/'

export default {
  name: 'PostItem',
  components: {
    PostUserProfile,
    PostCommentToggler
  }
}
</script>
<style lang="scss" scoped src="./PostItem.scss"></style>
