<template lang="pug">
  .app
    fork-this
    .main
      navbar
      nuxt
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Navbar from '@/components/partials/Example/Navbar.vue'
import ForkThis from '@/components/partials/Example/ForkThis.vue'

@Component({
  components: {
    ForkThis,
    Navbar
  }
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" scoped>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.app {
  height: 100vh;
  width: 100vw;
}
.main {
  max-width: 1024px;
  margin: 0 auto;
  padding: 30px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
