<script setup>
import DefaultTheme from "vitepress/theme";
import Home from "./Home.vue";
import Feature from "./Feature.vue";

const Layout = DefaultTheme.Layout

</script>

<template>
  <Layout>
    <template #home-hero-before> <Home/> </template>
    <template #home-features-before> <Feature /></template>
  </Layout>
</template>


<style scoped>

</style>