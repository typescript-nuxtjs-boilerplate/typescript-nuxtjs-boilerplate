<template lang="pug">
div
  h1.title
    | counter
  p counter: {{ counter }} {{ this.$store.state.counter.count }}
  p isOdd: {{ isOdd }} {{ this.$store.getters['counter/isOdd'] }}
  div
    p Clicked: {{ value }} times
    p
      button(@click="onIncrement") +
      button(@click="onDecrement") -
      button(@click="onIncrementIfOdd") Increment if odd
      button(@click="onIncrementAsync") Increment async
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { RootStore } from '@/@types/vuex'

@Component
export default class Counter extends Vue {
  $store!: RootStore

  counter: number = 0

  /** computed */
  public get isOdd() {
    return this.$store.getters['counter/isOdd']
  }

  /** Nuxt ライフサイクル */
  public async asyncData({ store }: any) {
    await console.log('counter/asyncData')
    const { state } = store as RootStore
    const { count } = state.counter

    return {
      counter: count + 1
    }
  }

  /** Nuxt ライフサイクル */
  public async fetch({ store }: any): Promise<void> {
    await console.log('counter/fetch')
    const { state, commit, dispatch } = store as RootStore
    const { count } = state.counter

    await dispatch('counter/asyncUpdateCount', count + 19)
  }

  /** Vue ライフサイクル */
  public created() {
    setTimeout(() => {
      this.counter = this.increment()
    }, 3000)
  }

  /** Vue ライフサイクル */
  public mounted() {
    console.log('mounted:', this.$refs)

    setTimeout(async () => {
      await this.asyncCount(200)
    }, 5000)
  }

  public increment() {
    const { state, commit } = this.$store
    commit('counter/updateCount', state.counter.count + 1)

    // updated counter count
    console.log('counter/increment', state.counter.count)
    return state.counter.count
  }

  public async asyncCount(count: number) {
    const { state, dispatch } = this.$store

    await dispatch('counter/asyncUpdateCount', state.counter.count + count)

    // updated counter count
    console.log('counter/asyncCount', state.counter.count)
  }

  public onIncrement(e) {}

  public onDecrement(e) {}

  public onIncrementIfOdd(e) {}

  public onIncrementAsync(e) {}

  public head() {
    return {
      title: 'counter'
    }
  }
}
</script>

<style lang="scss" scoped></style>
