<template>
  <!-- <div :active='isActive' class="progress-bar"> -->
  <div :class="['progress-bar', { active: active }]" >
    <!-- <div class="progress-bar" :active='active'> -->
    <!-- по ref обращаться будем к индикатору загрузки -->
    <div ref="indicator" class="indicator"></div>
  </div>
</template>
<script>

export default {
  // class навешиваем диамически, по умолчанию задаем false
  data () {
    return {
      active: false
    }
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  // отследить завершение transition и выполнить далее действия
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  // при монтировании компонента изменим на active true
  mounted () {
    // nextTick срабатывает но загрузка все раввно происходит слишком быстро, меняю на setTimeout
    // this.$nextTick(() => {
    //   this.active = true
    //   // console.log('inside nextTick callback:')
    // })
    // setTimeout(() => {
    //   this.active = true
    // }, 0)
    setTimeout(() => {
      this.active = true && this.isActive
    }, 0)
    // навесим слушатель на событие окошчание загрузки и передадим в метод emit
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  // удалять слушатели после обработки
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}

</script>

<style scoped lang="scss" src="./ProgressBar.scss"></style>
