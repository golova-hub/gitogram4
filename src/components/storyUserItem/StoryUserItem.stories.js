import StoryUserItem from './StoryUserItem.vue'

export default {
  title: 'StoryUserItem',
  component: StoryUserItem
}

const Template = (args) => ({
  components: { StoryUserItem },
  setup () {
    return { args }
  },
  template: '<story-user-item v-bind="args"/>'
})

export const Primary = Template.bind({})
Primary.args = {
  avatar: 'https://picsum.photos/300/300',
  username: 'Joe Moor',
  alt: 'User pic'
}
