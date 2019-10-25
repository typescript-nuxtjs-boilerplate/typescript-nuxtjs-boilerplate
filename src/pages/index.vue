<template lang="pug">
section.container
  div
    Logo
    HelloWorld
    h1.title
      | typescript-nuxtjs
    h2.subtitle
      | My gnarly Nuxt.js project
    .links
      a.button--green(href='https://nuxtjs.org/' target='_blank')
        | Documentation
      a.button--grey(href='https://github.com/nuxt/nuxt.js' target='_blank')
        | GitHub
</template>

<script lang="ts">
import Logo from '@/components/partials/Example/Logo.vue'

// Dynamic Import
// import HelloWorld from '@/components/HelloWorld.vue'
const HelloWorld = () => import('@/components/partials/Example/HelloWorld.vue')

export default {
  components: {
    Logo,
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
}

.title {
  display: block;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 100px;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  padding-bottom: 15px;
  font-size: 42px;
  font-weight: 300;
  color: #526488;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}
</style>
