<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Combobox from '@/components/Combobox.vue';
import Road from '@/components/Road.vue';
import ResultMessage from '@/components/ResultMessage.vue';
import { isoCodesList, filteredCountries } from '@/utils/countrydata';
import { countryTraffic } from '@/utils/trafficdata';
import { sideOfTheRoad } from '@/state';

const selectedCountry = ref<string | null>(null);

const onCountrySelected = (event: Event) => {
  const target = event.target as HTMLInputElement;
  selectedCountry.value = target.value;
};

let isoCode = '';

watch(selectedCountry, (newCountry) => {
  if (newCountry) {
    isoCode = isoCodesList[newCountry.toLowerCase()];
    sideOfTheRoad.value = countryTraffic[isoCode];
  } else {
    sideOfTheRoad.value = '';
  }
});
</script>

<template>
  <main>
    <div class="flex flex-col gap-y-8 lg:absolute lg:left-0 lg:top-0 lg:p-40 w-full md:w-1/2">
      <ResultMessage :selectedCountry="selectedCountry" :sideOfTheRoad="sideOfTheRoad" />
      <Combobox @country-selected="onCountrySelected" />
    </div>

    <Road :sideOfTheRoad="sideOfTheRoad"/>
  </main>
</template>
