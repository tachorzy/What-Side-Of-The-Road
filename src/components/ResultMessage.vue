<script setup>
const props = defineProps({
      selectedCountry: String,
      sideOfTheRoad: String
});
</script>

<template>
      <div class="flex flex-row gap-x-2 absolute md:relative mt-6 md:mt-4">
        <h1 v-if="props.selectedCountry" class="text-neutral-100 font-medium text-xl xl:text-3xl">{{ props.selectedCountry }} drives on the <b class="text-[#dce603]">{{ props.sideOfTheRoad }}</b> hand side of the road.</h1>
        <h1 v-else class="text-neutral-100 font-medium text-xl xl:text-3xl">Welcome.</h1>
      </div>
</template>