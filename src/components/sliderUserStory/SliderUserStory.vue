<template>
<!-- условие переносим на телепорт -->
<!-- <teleport to='#portal' v-if="showStories"> -->
  <div class="popup-container">
    <!-- шапка -->
    <div class="c-topline">
      <div class="g-container">
        <div class="popup-topline">
          <div class="icon-logo">
            <icon-comp name="LogoIcon"/>
          </div>
          <router-link to="/">
            <div class="icon-close">
              <icon-comp name="CloseIcon"/>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- слайды -->
    <!-- <button @click="trigger">click</button> -->
     <!-- <pre>{{$store.state.readme.repos.content}}</pre> -->
     <!-- <pre>{{$store.state.items}}</pre> -->
     <div class="stories-container">
      <ul class="stories">
        <li class="stories-item" v-for="(item, index) in $store.state.items.items" :key="item.id">
          <slider-item active
          v-bind="getPostsData(item)"
          :sliderIndex="index"
          :isActive="index === activeSliderIndex"></slider-item>
        </li>
      </ul>
     </div>
  </div>
<!-- </teleport> -->
</template>

<script>
import { IconComp } from '../../icons/'
import SliderItem from '../sliderItem/SliderItem.vue'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('readme')

export default {
  name: 'SliderUserStory',
  components: {
    IconComp,
    SliderItem
  },
  data () {
    return {
      activeSliderIndex: 0
    }
  },
  // computed: {
  //   ...mapState({
  //     repos: (state) => state.readme
  //   })
  // },
  // mounted () {
  //   this.setInitialPosition()
  // },
  // ловим пользовательское событие из дочернего компонента
  methods: {
    // trigger () {
    //   this.$store.dispatch('readme/fetchRepositories')
    // },
    getPostsData (item) {
      return {
        // postId: item.id,
        postAvatar: item.owner.avatar_url,
        postUsername: item.name,
        postDescription: item.description,
        postLogin: item.owner.login
      }
    }
  },
  created () {
    this.$store.dispatch('items/GET_USER_DATA')
    this.$store.dispatch('readme/GET_README')
  }
}
</script>

<style lang="scss" scoped src="./SliderUserStory.scss"></style>
