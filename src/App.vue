<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
// import Footer from './components/Footer.vue'
</script>

<template>
  <div class="bg-hero-pattern bg-opacity-25 bg-cover bg-center object-cover bg-fixed">
    <header>
      <div class="">
        <NavBar />
      </div>
    </header>
    <RouterView />

    <!-- <Footer /> -->
  </div>
</template>

<style scoped>
</style>
