<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Combobox from '@/components/Combobox.vue';
import Road from '@/components/Road.vue';
import { isoCodesList, filteredCountries } from '@/utils/countrydata';
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
  <main class="">
    <div class="flex flex-col gap-y-8 lg:absolute lg:left-0 lg:top-0 lg:p-40 w-1/2">
      <h1 v-if="selectedCountry" class="text-gray-700 font-medium text-3xl">{{ selectedCountry }} drives on the <b class="">{{ sideOfTheRoad }}</b> hand side of the road.</h1>
      <h1 v-else class="text-gray-700 font-medium text-3xl">Welcome.</h1>
      <Combobox @country-selected="onCountrySelected" />
    </div>

    <Road :sideOfTheRoad="sideOfTheRoad"/>
  </main>
</template>
