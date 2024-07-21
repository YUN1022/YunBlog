<template>
  <Layout>
    <template #home-hero-before>
      <Home/>
    </template>
    <template #home-features-before>
      <Feature/>
    </template>
    <template #doc-before>
      <DocHeader :key="store.key"/>
    </template>
    <template #doc-after>
      <Comment/>
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import Home from "./Home.vue";
import Feature from "./Feature.vue";
import DocHeader from "./DocHeader.vue";
import store, {updateKey} from "../utlis/store";
import {watch} from "vue";
import {useRoute} from "vitepress";
import Comment from "./Comment.vue";

const Layout = DefaultTheme.Layout
const route = useRoute()

watch(() => route.path, () => {updateKey(route.path)})

</script>


<style scoped>

</style>