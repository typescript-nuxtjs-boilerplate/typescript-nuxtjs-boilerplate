<template lang="pug">
  section.container
    h1.title
      | schema
    div
      span
        nuxt-link(to="/example/ajax/color") color
      span |
      span scheme
    div
      img(:src="data.image.named")
    nuxt-link(to="/example/")
      | example top
</template>

<script lang="ts">
import axios from 'axios'

export default {
  async asyncData() {
    const hex = Math.floor(Math.random() * 16777215).toString(16)
    const { data } = await axios.get(
      `http://www.thecolorapi.com/scheme?hex=${hex}`,
    )
    return { data }
  },
}
</script>
