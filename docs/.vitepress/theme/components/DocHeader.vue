<template>
  <div class="flex flex-col items-center">
    <h1 class="mb-7 font-bold text-[2.5em]">{{ post.title }}</h1>
    <span>📅 {{ post.date }}</span>
  </div>
</template>

<script lang="ts" setup>

import {useData} from "vitepress";
import {formatPost} from "../utlis/utlis";

const pageData = useData()
const post = formatPost(pageData.page.value)

</script>

<style scoped>

</style>