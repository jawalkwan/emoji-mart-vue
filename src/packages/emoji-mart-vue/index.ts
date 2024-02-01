import EmojiMartPicker from './index.vue'
import type { App } from 'vue'

export default {
  install: (app: App<any>) => {
    app.component('EmojiMartPicker', EmojiMartPicker)
  }
}