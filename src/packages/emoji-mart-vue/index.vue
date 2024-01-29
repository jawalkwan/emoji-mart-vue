<script lang="ts" setup>
import { Picker } from 'emoji-mart'
import { nextTick, onMounted, ref, useAttrs } from 'vue'

const attrs = useAttrs()
const emojiPicker = ref()
const instance = ref()

onMounted(() => {
  nextTick(() => {
    let props = Object.assign({ parent: emojiPicker.value }, attrs)
    if (instance.value == undefined) {
      instance.value = new Picker({ ...props })
    }
  })
})
</script>

<template>
  <div class="emoji-picker" ref="emojiPicker"></div>
</template>

<style scoped></style>
