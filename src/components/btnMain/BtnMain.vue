<template>
  <button class="g-btn theme-green">
  <span class="btn-text " @click="confirm">
    {{ text }}
  </span>
  </button>
</template>

<script>

export default {
  name: 'BtnMain',
  emits: ['onConfirm'],
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    confirm () {
      this.$emit('onConfirm')
    }
  }
}
</script>

<style scoped lang="scss" src="./BtnMain.scss"></style>
