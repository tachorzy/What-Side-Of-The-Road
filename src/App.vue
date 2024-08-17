<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar/>
  <RouterView />
</template>

<style>
body {
  background-color: #0A0B06;
}
</style>