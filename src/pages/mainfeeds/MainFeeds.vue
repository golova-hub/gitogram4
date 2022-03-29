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
</template>

<script>
import { TopLine } from '../../components/topline/'
import { IconComp } from '../../icons/'
import { StoryUserItem } from '../../components/storyUserItem/'
import stories from './data.json'

export default {
  name: 'MainFeeds',
  components: {
    TopLine,
    IconComp,
    StoryUserItem
  },
  data () {
    return {
      stories
    }
  }
}
</script>
<style scoped lang="scss" src="./MainFeeds.scss"></style>
