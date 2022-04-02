<template>
  <div @click="togglerClick" v-on:click="toggler = !toggler"  :class="{active:toggler}" class="post-toggler-btn" role="button">
    <span>{{toggler ? 'Hide issues' : 'Show issues'}}</span>
    <div class="icon-modifier">
      <icon-comp name="ModifierIcon"/>
    </div>
  </div>
</template>

<script>
import { IconComp } from '../../icons/'

export default {
  name: 'PostCommentToggler',
  components: {
    IconComp
  },
  data () {
    return {
      toggler: true
    }
  },
  methods: {
    togglerClick () {
      this.$emit('classChanged', this.toggler)
    }
  }
}
</script>

<style scoped lang="scss" src="./PostCommentToggler.scss"></style>
