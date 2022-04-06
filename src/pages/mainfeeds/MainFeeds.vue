<template>
  <div class="topline">
    <top-line>
      <template #headline>
       <div class="icon-logo">
         <icon-comp name="LogoIcon"/>
        </div>
        <div class="icon-home">
         <icon-comp name="HomeIcon"/>
        </div>
        <div class="profile-photo">
         <profile-photo></profile-photo>
        </div>
        <div class="icon-exit">
         <icon-comp name="ExitIcon"/>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <story-user-item
            :avatar="story.avatar"
            :username="story.username">
            </story-user-item>
          </li>
        </ul>
      </template>
    </top-line>
  </div>
  <div class="g-container">
    <div class="post-item">
      <post-item :postAvatar="postAvatar"
            :postUsername="postUsername">
        <template #taskcard>
          <div class="taskcard-title">Vue.js</div>
          <p class="taskcard-tasktext"><b>JavaScript</b> framework for building interactive web applications ⚡</p>
          <post-item-btns></post-item-btns>
        </template>
      </post-item>
    </div>
  </div>
</template>

<script>
import { TopLine } from '../../components/topline/'
import { IconComp } from '../../icons/'
import { StoryUserItem } from '../../components/storyUserItem/'
import { ProfilePhoto } from '../../components/profilePhoto/'
import { PostItem } from '../../components/postItem/'
import { PostItemBtns } from '../../components/postItemBtns/'
import stories from './data.json'

export default {
  name: 'MainFeeds',
  components: {
    TopLine,
    IconComp,
    StoryUserItem,
    ProfilePhoto,
    PostItem,
    PostItemBtns
  },
  data () {
    return {
      stories
    }
  }
}
</script>
<style scoped lang="scss" src="./MainFeeds.scss"></style>
