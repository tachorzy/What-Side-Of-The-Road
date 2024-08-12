<script setup>
import Flag from '@/components/Flag.vue';

const props = defineProps({
      isoCode: String,
      selectedCountry: String,
      sideOfTheRoad: String
});
</script>

<template>
      <div class="flex flex-row gap-x-3 absolute md:relative mt-6 md:mt-4">
            <Flag v-if="props.isoCode" :isoCode="props.isoCode" />
            <h1 v-if="props.selectedCountry" class="text-neutral-100 font-medium text-xl xl:text-3xl">{{ props.selectedCountry }} drives on the <b class="text-[#dce603]">{{ props.sideOfTheRoad }}</b> hand side of the road.</h1>
            <h1 v-else class="text-neutral-100 font-medium text-xl xl:text-3xl">Welcome, please select a country below.</h1>
      </div>
</template>