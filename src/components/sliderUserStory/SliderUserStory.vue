<template>
<!-- <teleport to='#portal' v-if="show"> -->
  <div v-if="showStories" class="popup-container" @click.self="closeModal">
    <div class="c-topline">
      <div class="g-container">
        <div class="popup-topline">
          <div class="icon-logo">
            <icon-comp name="LogoIcon"/>
          </div>
          <div class="icon-close" @click="closeModal">
            <icon-comp name="CloseIcon"/>
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- </teleport> -->
</template>

<script>
import { IconComp } from '../../icons/'

export default {
  name: 'MainFeeds',
  components: {
    IconComp
  },
  data () {
    return {
      showStories: false
    }
  },
  methods: {
    closeModal () {
      this.showStories = false
    }
  }
}
</script>

<style lang="scss" scoped src="./SliderUserStory.scss"></style>
