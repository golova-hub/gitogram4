import TopLine from './TopLine.vue'
import StoryUserItem from '../storyUserItem/StoryUserItem.vue'

export default {
  title: 'TopLine',
  component: TopLine,
  subcomponents: { StoryUserItem }
}

const Empty = (args) => ({
  components: { TopLine },
  setup () {
    return { args }
  },
  template: '<top-line v-bind="args"/>'
})

export const Primary1 = Empty.bind({})

const TopLineContent = (args) => ({
  components: { TopLine },
  setup () {
    return { args }
  },
  template: '<top-line v-bind="args"><story-user-item /></top-line>'
})

export const Primary = TopLineContent.bind({})
