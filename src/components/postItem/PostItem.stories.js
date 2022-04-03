import PostItem from './PostItem.vue'

export default {
  title: 'PostItem',
  component: PostItem
}

const Template = (args) => ({
  components: { PostItem },
  setup () {
    return { args }
  },
  template: '<post-item v-bind="args"/>'
})

export const Primary = Template.bind({})
