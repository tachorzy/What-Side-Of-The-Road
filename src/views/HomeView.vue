<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Combobox from '@/components/Combobox.vue';
import Road from '@/components/Road.vue';
import { isoCodesList } from '@/utils/countrydata';
import { countryTraffic } from '@/utils/trafficdata';
import { sideOfTheRoad } from '@/state';

const selectedCountry = ref<string | null>(null);

const onCountrySelected = (event: Event) => {
  const target = event.target as HTMLInputElement;
  selectedCountry.value = target.value;
};

watch(selectedCountry, (newCountry) => {
  console.log('selectedCountry changed:', newCountry);
  if (newCountry) {
    const isoCode = isoCodesList[newCountry.toLowerCase()];
    console.log('ISO Code:', isoCode);
    sideOfTheRoad.value = countryTraffic[isoCode];
    console.log('sideOfTheRoad updated to:', sideOfTheRoad.value);
  } else {
    sideOfTheRoad.value = '';
  }
});
</script>

<template>
  <main class="flex flex-col gap-y-8">
    <h1 v-if="selectedCountry" class="text-gray-700 text-medium text-3xl">{{ selectedCountry }} drives on the {{ sideOfTheRoad }} hand side of the road.</h1>
    <h1 v-else="selectedCountry" class="text-gray-700 text-medium text-3xl">Welcome.</h1>
    <Combobox @country-selected="onCountrySelected" />
    <Road :sideOfTheRoad="sideOfTheRoad"/>
  </main>
</template>
