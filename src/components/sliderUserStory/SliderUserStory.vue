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
    <button @click="trigger">click</button>
     <pre>{{$store.state.readme.repos.content}}</pre>
    <slider-item active></slider-item>
  </div>
<!-- </teleport> -->
</template>

<script>
import { IconComp } from '../../icons/'
import SliderItem from '../sliderItem/SliderItem.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('readme')

export default {
  name: 'SliderUserStory',
  components: {
    IconComp,
    SliderItem
  },
  computed: {
    ...mapState({
      repos: (state) => state.readme
    })
  },
  // ловим пользовательское событие из дочернего компонента
  methods: {
    trigger () {
      this.$store.dispatch('readme/fetchRepositories')
    }
  }
}
</script>

<style lang="scss" scoped src="./SliderUserStory.scss"></style>
