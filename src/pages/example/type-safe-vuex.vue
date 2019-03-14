<template lang="pug">
  section
    h1.title
      | type safe vuex
    p
      | state: {{ typeSafeState }}
    p
      | getter: {{ typeSafeGetter }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import {
  typeSafeVuexNS,
  ITypeSafeVuexState,
  ITypeSafeVuexMutations,
  ITypeSafeVuexGetters,
  ITypeSafeVuexActions
} from '@/store/type-safe-vuex'

@Component
export default class extends Vue {
  @typeSafeVuexNS.State('typeSafeState')
  public typeSafeState: ITypeSafeVuexState['typeSafeState']
  @typeSafeVuexNS.Getter('typeSafeGetter')
  public typeSafeGetter: ITypeSafeVuexGetters['typeSafeGetter']
  @typeSafeVuexNS.Mutation('setTypeSafe')
  public setTypeSafe: ITypeSafeVuexMutations['setTypeSafe']
  @typeSafeVuexNS.Action('typeSafeAction')
  public typeSafeAction: ITypeSafeVuexActions['typeSafeAction']

  public created() {
    console.log('created')
    this.setTypeSafe('type-safe-vuex from mutation')
    setTimeout(async () => {
      await this.typeSafeAction('type-safe-vuex from action')
    }, 3000)
  }
}
</script>
