<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar/>
  <RouterView />
</template>

<style>
body {
  background-color: #0A0B06;
}
</style>