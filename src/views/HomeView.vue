<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Combobox from '@/components/Combobox.vue';
import Road from '@/components/Road.vue';
import { isoCodesList } from '@/utils/countrydata';
import { countryTraffic } from '@/utils/trafficdata';

const selectedCountry = ref<string | null>(null);
const sideOfTheRoad = ref<string | null>(null);

const onCountrySelected = (event: Event) => {
  const target = event.target as HTMLInputElement;
  selectedCountry.value = target.value;
};

watch(selectedCountry, (newCountry) => {
  console.log('selectedCountry changed:', newCountry);
  if (newCountry) {
    const isoCode = isoCodesList[newCountry];
    console.log('ISO Code:', isoCode);
    sideOfTheRoad.value = countryTraffic[isoCode];
    console.log('sideOfTheRoad updated to:', sideOfTheRoad.value);
  } else {
    sideOfTheRoad.value = null;
    console.log('sideOfTheRoad reset to null');
  }
});
</script>

<template>
  <main>
    <Combobox @country-selected="onCountrySelected" />
    <Road :sideOfTheRoad="sideOfTheRoad"/>
  </main>
</template>
