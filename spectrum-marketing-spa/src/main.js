import Vue from 'vue'
import App from './App.vue'

// this file is the entry point for webpack

new Vue({
  // provides the Vue instance with an existing DOM element to mount on
  el: '#app',
  // a render function which generates DOM from App.vue
  render: h => h(App)
})
