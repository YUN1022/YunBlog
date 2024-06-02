<template>
  <Layout>
    <template #home-hero-before>
      <Home/>
    </template>
    <template #home-features-before>
      <Feature/>
    </template>
    <template #doc-before>
      <DocHeader/>
    </template>
    <template #doc-after></template>
  </Layout>
</template>

<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import Home from "./Home.vue";
import Feature from "./Feature.vue";
import DocHeader from "./DocHeader.vue";

const Layout = DefaultTheme.Layout

</script>


<style scoped>

</style>