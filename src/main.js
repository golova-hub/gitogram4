// import { app } from '@storybook/vue3'
// import { pop } from 'core-js/core/array'
import { createApp } from 'vue'
import store from './store'
import App from './App.vue'

const app = createApp(App)

app.use(store)
app.mount('#app')
// createApp(App).mount('#app')
// const app = createApp({  })

// Install the store instance as a plugin
// app.use(store)
