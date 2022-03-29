<template>
  <div class="topline">
    <top-line>
      <template #headline>
        <h1>headline</h1>
      </template>
      <template #content>
        <h2>content</h2>
      </template>
    </top-line>
  </div>
</template>

<script>
import TopLine from '../../components/topline/TopLine.vue'

export default {
  name: 'MainFeeds',
  components: {
    TopLine
  }
}
</script>
