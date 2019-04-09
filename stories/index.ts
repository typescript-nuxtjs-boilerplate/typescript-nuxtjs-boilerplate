import { storiesOf } from '@storybook/vue'
import HelloWorld from '@/components/HelloWorld.vue'

storiesOf('HelloWorld', module).add(
  'default',
  (): any => ({
    components: { HelloWorld },
    template: `<HelloWorld message="HelloWorld" />`
  })
)
