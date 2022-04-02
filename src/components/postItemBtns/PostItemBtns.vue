<template>
  <button class="btns-item">
    <div class="icon-star">
      <icon-comp name="StarIcon"/>
    </div>
    <span>Star</span>
  </button>
  <button class="btns-item">
    <span>154k</span>
  </button>
  <button class="btns-item">
    <div class="icon-fork">
      <icon-comp name="ForkIcon"/>
    </div>
    <span>Fork</span>
  </button>
  <button class="btns-item">
    <span>4</span>
  </button>
</template>

<script>
import { IconComp } from '../../icons/'

export default {
  name: 'PostItemBtns',
  components: {
    IconComp
  }
}
</script>

<style scoped lang="scss" src="./PostItemBtns.scss"></style>
