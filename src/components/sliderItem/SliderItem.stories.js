import SliderItem from './SliderItem.vue'

export default {
  title: 'SliderItem',
  component: SliderItem
}

const Template = (args) => ({
  components: { SliderItem },
  setup () {
    return { args }
  },
  template: '<slider-item v-bind="args"/>'
})

export const Primary = Template.bind({})
// Primary.args = {  };
