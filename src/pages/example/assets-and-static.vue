<template lang="pug">
  section
    h1.title
      | assets and static
    div
      h2 assets
      img(src='~/assets/images/lemon-sour.medium.jpg')
    div
      h2 static
      img(src='/lemon-sour.small.jpg')
    nuxt-link(to='/example/')
      | example top
</template>
