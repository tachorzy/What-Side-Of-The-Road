<script setup lang="ts">
      import { isoCodesList, filteredCountries } from '@/utils/countrydata';
      import { ref, computed } from 'vue'
      import {
            Combobox,
            ComboboxInput,
            ComboboxOptions,
            ComboboxOption,
      } from '@headlessui/vue'

      const selectedCountry = ref('')
      const query = ref('')

</script>

<template>

</template>