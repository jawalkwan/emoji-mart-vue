<script setup lang="ts">
import data from '@emoji-mart/data'
import EmojiPicker from '@/packages/emoji-mart-vue/index.vue'
</script>

<template>
  <div class="component-main">
    <div class="component-title">Emoji-Mart 4 Vue3+TS</div>
    <div class="component-desc">
      基于Emoji-Mart v5.5.2的Vue3+TS组件，可以直接在Vue3+TS项目中引用，并映射所有Emoji-Mart的Props。
    </div>
    <div class="emoji-picker-container">
      <EmojiPicker
        :data="data"
        locale="zh"
        searchPosition="sticky"
        skinTonePosition="search"
        previewPosition="none"
      />
    </div>
  </div>
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
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
}

.component-desc {
  line-height: 1.5;
  color: #999;
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}
</style>
