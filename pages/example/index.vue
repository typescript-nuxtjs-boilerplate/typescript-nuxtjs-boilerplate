<template lang="pug">
  section
    h1.red index
    p
      nuxt-link(to='/example/ajax/color', no-prefetch)
        | color
    p
      nuxt-link(to='/example/ajax/schema')
        | schema
    p
      nuxt-link(to='/example/c-01/e-02/')
        | /c-01/e-02/
    p
      n-link(to='/example/d-03/f-04/')
        | /d-03/f-04/
    p
      nuxt-link(to='/example/assets-and-static')
        | assets and static
    p
      nuxt-link(to='/example/todos')
        | todos
</template>

<style lang="scss" scoped>
.red {
  color: red;
}
</style>
