<template lang="pug">
  section
    h1.red
      | index
    hr
    p
      nuxt-link(to='/example/ajax/color', no-prefetch)
        | color
    p
      nuxt-link(to='/example/ajax/schema')
        | schema
    p
      nuxt-link(to='/example/c-01/e-02/')
        | custom-path /c-01/e-02/
    p
      n-link(to='/example/d-03/f-04/')
        | custom-path /d-03/f-04/
    p
      nuxt-link(to='/example/assets-and-static')
        | assets and static
    p
      nuxt-link(to='/example/todos')
        | todos
    p
      nuxt-link(to='/example/life-cycle')
        | life-cycle
    p
      nuxt-link(to='/example/use-plugin')
        | use-plugin
    p
      nuxt-link(to='/example/custom-head')
        | custom-head
    p
      nuxt-link(to='/example/api')
        | api
</template>

<style lang="scss" scoped>
.red {
  margin: 5px;
  color: red;
}

p {
  margin: 5px;
}
</style>
