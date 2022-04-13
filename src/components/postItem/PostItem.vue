<template>
  <div class="post-item-content">
    <div class="post-user-profile">
        <post-user-profile :postUsername="postUsername">
        </post-user-profile>
    </div>
    <div class="taskcard">
      <slot name="taskcard" />
    </div>
    <div class="post-item-footer">
      <div class="post-comment-toggler">
        <post-comment-toggler v-on:classChanged="handler"></post-comment-toggler>
      </div>
      <div :class='{"hide-issues": childToggler}'  class="post-comments">
        <div class="post-comment-item">
          <b>joshua_l</b> Enable performance measuring in production, at the user's request
        </div>
         <div class="post-comment-item">
          <b>joshua_l</b> Enable performance measuring in production, at the user's request
        </div>
         <div class="post-comment-item">
          <b>joshua_l</b> Enable performance measuring in production, at the user's request
        </div>
      </div>
      <div class="post-item-date">15 may</div>
    </div>
  </div>
</template>
<script>

import { PostUserProfile } from '../../components/postUserProfile/'
import { PostCommentToggler } from '../../components/postCommentToggler/'
// import { mapState } from 'vuex'

export default {
  name: 'PostItem',
  components: {
    PostUserProfile,
    PostCommentToggler
  },
  // computed: {
  //   ...mapState({
  //     trendings: state => state.items
  //   })
  // },
  methods: {
    // ...mapActions({
    //   // getTrendings: 'trendings/getTrendings'
    // }),
    handler (toggler) {
      this.childToggler = toggler
    }
  },
  data () {
    return {
      childToggler: false
      // postAvatar: 'https://picsum.photos/300/300'
      // postUsername: 'joshua_l'
    }
  },
  // props передаем данные из массив с гитхаба, коментим старые данные в data
  props: {
    postUsername: String
    // postAvatar: String,
    // postDescription: String
  }
  // async created () {
  //   await this.getTrendings()
  // }
}
</script>
<style lang="scss" scoped src="./PostItem.scss"></style>
