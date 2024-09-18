<script setup>
const props = defineProps({
  isoCode: String
});
console.log(`isoCode in Flag.vue is ${props.isoCode}`);     
</script>

<template>
      <img :src="`/flags/${props.isoCode.toUpperCase()}.svg`" alt="Flag" class="w-10 h-10 rounded-xl"/>
</template>