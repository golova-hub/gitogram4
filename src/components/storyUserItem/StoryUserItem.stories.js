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
  template: '<story-user-item title="User Name" src="https://picsum.photos/300/300" alt="user pick"/>'
})

export const Primary = Template.bind({})
