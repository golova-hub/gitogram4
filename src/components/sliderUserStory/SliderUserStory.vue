<template>
<!-- условие переносим на телепорт -->
<teleport to='#portal' v-if="showStories">
  <div class="popup-container" @click.self="closeModal">
    <!-- шапка -->
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
    <!-- слайды -->
    <button @click="trigger">click</button>
     <pre>{{$store.state.readme.items}}</pre>
    <slider-item active></slider-item>
  </div>
</teleport>
</template>

<script>
import { IconComp } from '../../icons/'
import SliderItem from '../sliderItem/SliderItem.vue'
// import { createNamespacedHelpers } from 'vuex'
// import { getRepoReadme } from '../../api/rest/readmeRepo'
// const { mapState } = createNamespacedHelpers('readme')

export default {
  name: 'MainFeeds',
  components: {
    IconComp,
    SliderItem
  },
  // data () {
  //   return {
  //     showStories: true
  //   }
  // },
  emits: ['close'],
  // передаем данные из другого компонента
  props: {
    // eslint-disable-next-line vue/no-dupe-keys
    showStories: {
      type: Boolean,
      default: false
    }
  },
  // computed: {
  //   ...mapState({
  //     users: (state) => state.users
  //   })
  // },
  // ловим пользовательское событие из дочернего компонента
  methods: {
    closeModal () {
      this.$emit('close', false)
    },
    async getReadmeText (owner, repo) {
      this.loading = true
      const payload = {
        headers: {
          accept: 'application/vnd.github.v3.html'
        }
      }
      let data
      try {
        // eslint-disable-next-line no-undef
        data = (await getRepoReadme(owner, repo, payload)).data
      } catch (e) {
        console.log(e)
        throw e
      } finally {
        setTimeout(() => {
          this.loading = false
          this.readmeText = data
        }, 300)
      }
    },
    trigger () {
      this.$store.dispatch('readme/fetchRepositories')
    }
  }
}
</script>

<style lang="scss" scoped src="./SliderUserStory.scss"></style>
