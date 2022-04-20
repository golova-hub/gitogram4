<template>
  <!-- <div :class="['slider-item', { active: isActive }]"> -->
  <div :class="{ active: isActive }" class="slider-item">
    <div class="slide-head">
      <!-- <progress-bar :active='active'></progress-bar> -->
      <progress-bar :isActive='isActive'></progress-bar>
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
    <template v-if="isActive">
      <!-- в зависимости от зачения пропов, ввыводим кнопки -->
        <button v-if="btnsShown.includes('next')" class="btn btn-next" @click="$emit('nextSlide')">
          <div class="icon-arrow">
            <icon-comp name="ArrowIcon"/>
            </div>
        </button>
        <button v-if="btnsShown.includes('prev')" class="btn btn-prev" @click="$emit('prevSlide')">
          <div class="icon-arrow">
            <icon-comp name="ArrowIcon"/>
          </div>
      </button>
    </template>
  </div>
</template>

<script>
import BtnMain from '../btnMain/BtnMain.vue'
import PostUserProfile from '../postUserProfile/PostUserProfile.vue'
import { ProgressBar } from '../progressBar'
import { IconComp } from '../../icons/'

export default {
  name: 'SliderItem',
  components: {
    ProgressBar,
    PostUserProfile,
    BtnMain,
    IconComp
  },
  // data () {
  //   return {
  //     postAvatar: 'https://picsum.photos/300/300',
  //     postUsername: 'joshua_l',
  //     sliderBtnText: 'Follow'
  //   }
  // },
  emits: ['prevSlide', 'nextSlide'],
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
    },
    isActive: {
      type: Boolean,
      default: false
    },
    sliderIndex: {
      type: Number,
      required: true,
      default: 1
    },
    // чтобы сккрывать кнопки на крайних слайдах
    // если передан весь массив, показываем обе кнопки
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev']
      // validator(value) ={
      //   return value.every((item) => item === 'netx' || item === 'prev')
      // }
    }
  }
}
</script>

<style lang="scss" scoped src="./SliderItem.scss"></style>
