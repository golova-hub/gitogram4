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
          @nextSlide="handleSlide(activeSliderIndex + 1)"
          @prevSlide="handleSlide(activeSliderIndex - 1)"
          ></slider-item>
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
  emits: ['handleSlide', 'prevSlide', 'nextSlide'],
  data () {
    return {
      activeSliderIndex: 2
      // sliderIndex: 0,
      // sliderPosition: 0
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
      const { slider } = this.$refs // получаем блок-обертку слайдов
      // const position = slider.getBoundingClientRect().left
      // console.log(positionIni) // получаем отступ слева от окна браузера
      // slider.style.left === `(50% - itemWidth - 40)px`

      // this.activeSliderIndex = this.items.findIndex((item) => {
      //   return item.id.toString() === this.$route.params.id
      // })
      const width = this.$refs.item[0].clientWidth // ширина слайда и отступы
      const position = width * this.activeSliderIndex * -1 // считаем на сколько пикселеей сдвинуть блок
      // console.log(position)
      slider.style.transform = `translateX(${position}px)`
    }
    // changeSliderItem (dir) {
    //   const { slider, item } = this.$refs
    //   const width = this.getSliderItemWidth(item[this.activeSliderIndex])
    //   const sign = -1
    //   dir === 'left'
    //     ? this.activeSliderIndex--
    //     : this.activeSliderIndex++
    //   const position = width * this.activeSliderIndex * sign
    //   slider.style.transform = `translateX(${position}px)`
    // }
  },
  created () {
    this.$store.dispatch('items/GET_USER_DATA')
    // this.$store.dispatch('readme/GET_README')
  }
}
</script>

<style lang="scss" scoped src="./SliderUserStory.scss"></style>
