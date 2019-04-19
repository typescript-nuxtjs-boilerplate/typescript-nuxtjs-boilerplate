<template lang="pug">
section.container
  h1.title
    | now-utcoffset
  p now: {{ now }}
  p from-string: {{ fromString }}
  p now-date: {{ nowDate }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import moment from 'moment'

@Component
export default class extends Vue {
  public get now(): string {
    const dayWrapper = moment(new Date()).utcOffset('+0900')
    return dayWrapper.format()
  }

  public get fromString(): string {
    const dayWrapper = moment('2013-03-07T07:00:00+09:00').utcOffset('+0900')
    return dayWrapper.format()
  }

  public get nowDate(): string {
    const dayWrapper = moment(new Date()).utcOffset('+0900')
    return dayWrapper.format('YYYY-MM-DD')
  }

  public head() {
    return {
      title: 'now-utcoffset'
    }
  }
}
</script>

<style lang="scss"></style>
