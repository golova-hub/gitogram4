<template>
  <div class="topline">
    <top-line>
      <template #headline>
        <icon-comp />
      </template>
      <template #content>
        <h2>content</h2>
      </template>
    </top-line>
  </div>
</template>

<script>
import { TopLine } from '../../components/topline/TopLine.vue'
import { IconComp } from '../../icons/'

export default {
  name: 'MainFeeds',
  components: {
    TopLine,
    IconComp
  }
}
</script>
