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
      <ul class="stories" ref="slider">
        <li class="stories-item" v-for="(item, index) in $store.state.items.items" :key="item.id" ref="item">
          <slider-item active
          v-bind="getPostsData(item)"
          :isActive="index === activeSliderIndex"
          :btnsShown="activeBtns"
          @prevSlider="prevSlider()"
          @nextSlider="nextSlider()"
          ></slider-item>
        </li>
      </ul>
     </div>
  </div>
<!-- </teleport> -->
</template>

<script>
import { mapActions } from 'vuex'
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
  emits: ['handleSlide', 'prevSlider', 'nextSlider'],
  data () {
    return {
      activeSliderIndex: 6
    }
  },
  computed: {
    // скрываем кнопки у крайних слайдов
    activeBtns () {
      if (this.activeSliderIndex === 0) return ['next']
      if (this.activeSliderIndex === this.$store.state.items.items.length - 1) return ['prev']
      return ['next', 'prev'] // по умолчанию вернем оба значения
    }
  },
  mounted () {
    this.getSliderItemWidth() // ширина слайда
    this.setIniPosition() // позиция в зависимости от номена активного слайда (0 по умолчанию)
  },
  // ловим пользовательское событие из дочернего компонента
  methods: {
    ...mapActions({
      // fetchReadme: 'trendings/fetchReadme'
    }),
    getPostsData (item) {
      return {
        postId: item.id,
        postAvatar: item.owner.avatar_url,
        postUsername: item.name,
        postDescription: item.description,
        postLogin: item.owner.login
      }
    },
    handleSlide (dir) {
      this.$emit('handleSlide', dir)
      // console.log(dir)
    },
    // получаем ширину слайда
    getSliderItemWidth (item) {
      const itemWidth = parseInt(this.$refs.item[0].clientWidth)
      return itemWidth
      // console.log(itemWidth)
    },
    setIniPosition () {
      this.setNewPosition()
    },
    nextSlider (activeSlider) {
      const activeSliderIndex = this.activeSliderIndex++
      this.setNewPosition()
      return activeSliderIndex
    },
    prevSlider (activeSlider) {
      const activeSliderIndex = this.activeSliderIndex--
      this.setNewPosition()
      return activeSliderIndex
    },
    setNewPosition () {
      const { slider } = this.$refs // получаем блок-обертку слайдов
      // const activeSlider = this.activeSlider
      const width = this.$refs.item[0].clientWidth
      const position = width * this.activeSliderIndex * -1 // считаем на сколько пикселей сдвинуть блок
      slider.style.transform = `translateX(${position}px)`
    }
  },
  created () {
    this.$store.dispatch('items/GET_USER_DATA')
    // this.$store.dispatch('items/GET_README')
  }
}
</script>

<style lang="scss" scoped src="./SliderUserStory.scss"></style>
