// .vue ファイルの中で Component に指定するなら以下の書き方を使う
// import scroll from '@/plugins/directives/scroll';
//
// @Component({
//   directives: {
//     scroll
//   }
// })

import { throttle } from 'throttle-debounce'

export default {
  inserted: (el, binding): void => {
    const f = throttle(20, (evt): void => {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    })

    window.addEventListener('scroll', f)
  }
}

// nuxt.config.ts の plugin に定義するなら以下の書き方を使う

// import Vue from 'vue'
//
// Vue.directive('scroll', {
//   inserted: function(el, binding) {
//     let f = function(evt) {
//       if (binding.value(evt, el)) {
//         window.removeEventListener('scroll', f)
//       }
//     }
//     window.addEventListener('scroll', f)
//   }
// })
