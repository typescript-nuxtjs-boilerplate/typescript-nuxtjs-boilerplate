<template lang="pug">
div
  h1.title
    | counter
  div
    p.clicked
      | Clicked:
      span.value {{ value }}
      span times
    p
      button.button-size(@click="onIncrement") +
      button.button-size(@click="onDecrement") -
      button.button-size(@click="onIncrementIfOdd") Increment if odd
      button.button-size(@click="onIncrementAsync") Increment async
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { RootStore } from '@/@types/vuex'

@Component
export default class Counter extends Vue {
  $store!: RootStore

  /** computed */
  public get value() {
    return this.$store.state.counter.count
  }

  /** Nuxt ライフサイクル */
  public asyncData({ store }: any) {
    const { state } = store as RootStore
    const { count } = state.counter

    // ...
  }

  /** Nuxt ライフサイクル */
  public fetch({ store }: any) {
    const { state, commit, dispatch } = store as RootStore
    const { count } = state.counter

    // ...
  }

  public onIncrement() {
    console.log('onIncrement')
    const { state, commit } = this.$store
    commit('counter/increment', 1)
  }

  public onDecrement() {
    console.log('onDecrement')
    const { state, commit } = this.$store
    commit('counter/decrement', 1)
  }

  public onIncrementIfOdd() {
    console.log('onIncrementIfOdd')
    const { state, getters, commit } = this.$store

    if (getters['counter/isOdd']) {
      this.onIncrement()
    }
  }

  public async onIncrementAsync() {
    console.log('onIncrementAsync')
    const { state, dispatch } = this.$store
    await dispatch('counter/asyncUpdateCount', 1)
  }

  public head() {
    return {
      title: 'counter'
    }
  }
}
</script>

<style lang="scss" scoped>
.clicked {
  font-size: 1.5em;
}

.value {
  color: red;
  margin: 0 5px 0 5px;
}

.button-size {
  font-size: 1.2em;
  width: 170px;
  height: 100px;
  margin: 2px 2px;
}
</style>
