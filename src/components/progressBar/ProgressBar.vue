<template>
  <div :class={active} class="progress-bar">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      active: false
    }
  },
  props: {
    progress: {
      type: Number,
      default: 0
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.active = true
      console.log('inside nextTick callback:')
    })
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}

</script>

<style scoped lang="scss" src="./ProgressBar.scss"></style>
