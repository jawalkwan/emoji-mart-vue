<script setup lang="ts">
import data from '@emoji-mart/data'
import EmojiPicker from '@/packages/emoji-mart-vue/index.vue'
</script>

<template>
  <div class="emoji-picker-container">
    <EmojiPicker
      :data="data"
      locale="zh"
      searchPosition="sticky"
      skinTonePosition="search"
      previewPosition="none"
    />
  </div>
</template>

<style scoped></style>
