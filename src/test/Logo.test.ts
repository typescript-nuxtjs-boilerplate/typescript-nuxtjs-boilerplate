import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo', (): void => {
  test('is a Vue instance', (): void => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
