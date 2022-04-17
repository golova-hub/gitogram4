import ProgressBar from './ProgressBar.vue'

export default {
  title: 'ProgressBar',
  component: ProgressBar,
  // добавляем emits в сторибук
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'for progress'
    }
  }
}

export const Template = (args) => ({
  components: { ProgressBar },
  setup () {
    return { args }
  },
  template: '<progress-bar v-bind="args" @onFinish="args.onFinish"/>'
})

export const Primary = Template.bind({})
// Primary.args = {
//   progress: 0,
//   active: false
// }
