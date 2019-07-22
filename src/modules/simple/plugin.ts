const simple = {
  simpleFunction: (): void => {
    console.log('simpleFunction')
  }
}

export default (ctx, inject): void => {
  ctx.$simple = simple
  inject('simple', simple)
}
