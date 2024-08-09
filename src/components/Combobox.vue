<script setup lang="ts">
      import { isoCodesList, filteredCountries } from '@/utils/countrydata';
      import { ref, computed, defineEmits } from 'vue'
      import {
            Combobox,
            ComboboxInput,
            ComboboxOptions,
            ComboboxOption,
      } from '@headlessui/vue'

      interface Country {
            code: string;
            name: string;
      }     

      const selectedCountry = ref<Country | null>(null);
      const query = ref('')
      
      const queriedCountries = computed(() =>
            query.value === ''
                  ? filteredCountries
                  : filteredCountries.filter((country) => {
                  return country.toLowerCase().includes(query.value.toLowerCase())
                  })
      )

      const emit = defineEmits(['countrySelected']);

      function handleSelect(country: Country) {
            selectedCountry.value = country;
            emit('countrySelected', country);
      }

</script>

<template>
      <Combobox v-model="selectedCountry" @change="handleSelect">
            <div class="relative mt-1 mr-24">
                  <div
                        class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-lg"
                  >
                        <ComboboxInput @change="query = $event.target.value" class="border-2 border-blue-900  p-2"/>
                  </div>

                  <ComboboxOptions class="max-h-96 w-full bg-neutral-100 overflow-y-scroll flex flex-col gap-y-2.5 rounded-2xl mt-2">
                        <ComboboxOption
                              v-for="country in queriedCountries"
                              :key="country"
                              :value="country"
                              class="cursor-pointer hover:bg-blue-400 hover:text-white p-4 "
                        >
                              {{ country }}
                        </ComboboxOption>
                  </ComboboxOptions>
            </div>
       </Combobox>
</template>