import PostItemBtns from './PostItemBtns.vue'

export default {
  title: 'PostItemBtns',
  component: PostItemBtns,
  argTypes: {
    avatar: {
      control: { type: 'text' }
    }
  }
}

const Template = (args) => ({
  components: { PostItemBtns },
  setup () {
    return { args }
  },
  template: '<post-item-btns v-bind="args"></post-item-btns>'
})

export const Primary = Template.bind({})
// Primary.args = {  };
