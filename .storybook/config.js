import { configure } from '@storybook/vue'

const loadStories = () => {
  require("../stories/index")
}

configure(loadStories, module)
