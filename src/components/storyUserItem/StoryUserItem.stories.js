import StoryUserItem from './StoryUserItem.vue'

export default {
  title: 'StoryUserItem',
  component: { StoryUserItem }
}

const template = (args) => ({
  components: { StoryUserItem },
  // data () {
  //   return { args }
  // },
  template: `<StoryUserItem :avatar='story.avatar'
  :username='story.username'></StoryUserItem>`
})

export const Default = template.bind({})
