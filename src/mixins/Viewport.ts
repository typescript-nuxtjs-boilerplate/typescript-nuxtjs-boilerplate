import { Component, Vue } from 'nuxt-property-decorator'
import { makeViewport } from '@/utilities/'

@Component
export default class ViewportMixin extends Vue {
  /** ライフサイクル */
  public mounted(): void {
    const viewport = makeViewport(this.$ua, this.$t.bind(this))
    this.$metaInfo.meta = [viewport]
    this.$meta().refresh()
  }
}
