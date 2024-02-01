<script setup lang="ts">
import data from '@emoji-mart/data'
import markdownit from 'markdown-it'
import { ref } from 'vue'
import readmeMd from './readme.md?raw'

const readme = ref('')
const md = markdownit({
  html: true,
  linkify: true,
  typographer: true
})

readme.value = md.render(readmeMd)
</script>

<template>
  <div class="component-main">
    <div class="component-title">Emoji-Mart 4 Vue3+TS</div>
    <div class="component-desc">
      基于Emoji-Mart v5.5.2的Vue3+TS组件，可以直接在Vue3+TS项目中引用，并映射所有Emoji-Mart的Props。
    </div>
    <div class="emoji-picker-container">
      <EmojiMartPicker
        :data="data"
        locale="zh"
        searchPosition="sticky"
        skinTonePosition="search"
        previewPosition="none"
      />
    </div>
    <div class="install-doc markdown-body" v-html="readme"></div>
  </div>
</template>

<style>
@import './github-markdown-light.css';
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  font-family:
    Quotes,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
}

.component-main {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-bottom: 30px;
}

.component-title {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  margin-bottom: 30px;
  margin-top: 20vh;
}

.component-desc {
  line-height: 1.5;
  color: #999;
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}

.install-doc {
  width: 100%;
  margin-top: 30px;
}
</style>
