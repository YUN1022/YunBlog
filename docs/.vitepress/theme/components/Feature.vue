<script setup lang="ts">
import {data as posts} from '../utlis/post.data.mjs'
import {withBase} from "vitepress";
</script>

<template>
  <div class="theme-container">
    <ul>
      <li class="w-full block rounded-2xl px-8 mb-3 border-2 border-[#767764]" v-for="post of posts">
        <a class="flex flex-col" :href="withBase(post.url)">
          <h1 class="mb-3 text-xl font-medium">{{ post.title }}</h1>
          <span class = "mb-2 opacity-80 font-light">{{post.summary}}</span>
          <span class="text-right">{{post.date}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>