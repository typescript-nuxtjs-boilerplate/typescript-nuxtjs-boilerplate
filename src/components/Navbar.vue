<template lang="pug">
  section.header
    nuxt-link(to='/example', exact='')
      | Home
    nuxt-link(v-if='!isAuthenticated', to='/example/auth/sign-in')
      | Sign In
    nuxt-link(v-else='isAuthenticated', to='/example/auth/sign-off')
      | Sign Off
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class NavBar extends Vue {
  get isAuthenticated(): boolean {
    return this.$store.getters['auth/isAuthenticated']
  }

  public asyncData() {
    return {
      isAuthenticated: this.$store.getters['auth/isAuthenticated']
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  margin-bottom: 20px;
}
a {
  margin-right: 20px;
  font-size: 14px;
  color: #999;
  text-decoration: none;
  text-transform: uppercase;
  padding-top: 2px;
  padding-bottom: 2px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  transition: color 0.25s;
  font-weight: 400;
  line-height: normal;
}
a:hover {
  color: #333;
}
a.nuxt-link-active {
  color: #333;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  font-weight: 600;
}
</style>
