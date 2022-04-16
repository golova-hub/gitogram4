<template>
  <div class="slider-item" :class="{ active }">
    <div class="slide-head">
      <progress-bar :active="active"></progress-bar>
      <div class="slide-container">
        <post-user-profile :postAvatar="data.postAvatar"
            :postUsername="data.postUsername"></post-user-profile>
      </div>
    </div>
    <div class="slide-body">
      <div class="slide-container">
        <div class="slider-content">
          <div class="slider-body-img">
            <img src="https://picsum.photos/300/300" alt="Картинка" />
          </div>
          <div class="slider-text" v-if="data.content?.length" >
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
    }
  }
}
</script>

<style lang="scss" scoped src="./SliderItem.scss"></style>
