<template>
  <div class="c-topline">
    <div class="g-container">
      <div class="headline">
        <slot name="headline" />
        </div>
      <div class="content" v-if="$slots.content">
        <slot name="content" />
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss" src="./topline.scss"></style>
