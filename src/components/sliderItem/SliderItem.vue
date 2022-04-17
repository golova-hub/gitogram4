<template>
  <div class="slider-item" :class="{ active }">
    <div class="slide-head">
      <progress-bar :active="active"></progress-bar>
      <div class="slide-container">
        <post-user-profile :postAvatar="postAvatar"
            :postLogin="postLogin"></post-user-profile>
      </div>
    </div>
    <div class="slide-body">
      <div class="slide-container">
        <div class="slider-content">
          <div class="loader" v-if="loading">
            loading...
          </div>
          <div class="slider-info" v-else>
            <div class="slider-body-img">
              <img src="https://picsum.photos/300/300" alt="Картинка" />
            </div>
            <div class="slider-text" v-if="data.content?.length" v-html="data.content"></div>
            <div class="placeholder" v-else >placeholder</div>
          </div>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <div class="slide-container">
        <btn-main>Follow</btn-main>
      </div>
    </div>
  </div>
</template>

<script>
import BtnMain from '../btnMain/BtnMain.vue'
import PostUserProfile from '../postUserProfile/PostUserProfile.vue'
import { ProgressBar } from '../progressBar'

export default {
  name: 'SliderItem',
  components: {
    ProgressBar,
    PostUserProfile,
    BtnMain
  },
  // data () {
  //   return {
  //     postAvatar: 'https://picsum.photos/300/300',
  //     postUsername: 'joshua_l',
  //     sliderBtnText: 'Follow'
  //   }
  // },
  props: {
    active: Boolean,
    loading: Boolean,
    data: {
      type: Object,
      requared: true,
      default: () => ({})
    },
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

<style lang="scss" scoped src="./SliderItem.scss"></style>
