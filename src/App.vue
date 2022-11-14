<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div>
    <header>
      <div class="">
        <NavBar />
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
</style>
