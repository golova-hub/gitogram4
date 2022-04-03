import PostCommentToggler from './PostCommentToggler.vue'

export default {
  title: 'PostCommentToggler',
  component: PostCommentToggler
}

const Template = (args) => ({
  components: { PostCommentToggler },
  setup () {
    return { args }
  },
  template: '<post-comment-toggler v-bind="args"></post-comment-toggler>'
})

export const Primary = Template.bind({})
// Primary.args = {  };

// export const Secondary = Template.bind({});
// Secondary.args = {  };
