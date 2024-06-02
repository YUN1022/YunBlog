<script setup lang="ts">
import {data as posts} from '../utlis/post.data.mjs'
import {withBase} from "vitepress";
</script>

<template>
  <div class="theme-container">
    <ul>
      <li class="w-full block rounded-2xl px-8 mb-3 border-2 border-[#767764] cursor-pointer" v-for="post of posts">
        <a class="flex flex-col" :href="withBase(post.url)">
          <h1>{{ post.title }}</h1>
          <span>{{post.summary}}</span>
          <span>{{post.date}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>