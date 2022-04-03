import ProfilePhoto from './ProfilePhoto.vue'

export default {
  title: 'ProfilePhoto',
  component: ProfilePhoto
}

const Template = (args) => ({
  components: { ProfilePhoto },
  setup () {
    return { args }
  },
  template: '<profile-photo v-bind="args"/>'
})

export const Primary = Template.bind({})
