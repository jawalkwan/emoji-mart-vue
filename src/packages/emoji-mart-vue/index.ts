import EmojiMartPicker from './index.vue'

export default {
  install: (app: any, options: any) => {
    app.component('EmojiMartPicker', EmojiMartPicker)
  }
}