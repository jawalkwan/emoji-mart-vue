import { createApp } from 'vue'

import App from './App.vue'
import emojiMartVue from './packages/emoji-mart-vue'

const app = createApp(App)
app.use(emojiMartVue)

app.mount('#app')
