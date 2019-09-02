import { Plugin } from '@nuxt/types'

export const simple = {
  simpleFunction: (): void => {
    console.log('simpleFunction')
  }
}

const simplePlugin: Plugin = (ctx, inject): void => {
  ctx.$simple = simple
  inject('simple', simple)
}

export default simplePlugin
