import BtnMain from './BtnMain.vue'

export default {
  title: 'BtnMain',
  component: BtnMain
}

const defaultViewBtn = (args) => ({
  components: { BtnMain },
  setup () {
    return { args }
  },
  template: '<btn-main v-bind="args" />'
})

export const Primary = defaultViewBtn.bind({})
Primary.args = {
  text: 'Текст кнопки'
}
