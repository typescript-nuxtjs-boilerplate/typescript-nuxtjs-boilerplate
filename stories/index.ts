import { storiesOf } from '@storybook/vue'
import HelloWorld from '@/components/HelloWorld.vue'

storiesOf('HelloWorld', module).add('default', () => ({
  components: { HelloWorld },
  template: `<HelloWorld message="HelloWorld" />`,
}))
