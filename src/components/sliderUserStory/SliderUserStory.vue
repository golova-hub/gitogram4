<template>
<!-- условие переносим на телепорт -->
<teleport to='#portal' v-if="showStories">
  <div class="popup-container" @click.self="closeModal">
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
</teleport>
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
  // ловим пользовательское событие из дочернего компонента
  methods: {
    closeModal () {
      this.$emit('close', false)
    }
  },
  // передаем данные из другого компонента
  props: {
    // eslint-disable-next-line vue/no-dupe-keys
    showStories: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped src="./SliderUserStory.scss"></style>
