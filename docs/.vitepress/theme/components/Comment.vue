<script setup lang="ts">
import {onMounted} from 'vue'

const setUterances = () => {
  let utterances = document.createElement('script')
  utterances.src = "https://utteranc.es/client.js"
  utterances.setAttribute('repo', 'YUN1022/YunBlog')
  utterances.setAttribute('issue-term', 'pathname')
  utterances.setAttribute('label', 'Comment')
  utterances.crossOrigin = 'anonymous'
  utterances.setAttribute('theme', 'gitgub-dark')
  document.querySelector('#comment').appendChild(utterances)
}

onMounted(()=>{
  setUterances()
})
</script>

<template>
  <div id="comment"/>
</template>

<style scoped>
</style>