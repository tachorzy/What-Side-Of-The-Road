<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBarItem from './components/NavBarItem.vue';
</script>

<template>
  <NavBarItem/>
  <RouterView />
</template>

<style>
body {
  background-color: #0A0B06;
}
</style>