<template>
  <button class="g-btn theme-green">
  <span class="btn-text " @click="confirm">
    Follow
  </span>
  </button>
</template>

<script>

export default {
  name: 'BtnMain',
  emits: ['onConfirm'],
  methods: {
    confirm () {
      this.$emit('onConfirm')
    }
  }
}
</script>

<style scoped lang="scss" src="./BtnMain.scss"></style>
