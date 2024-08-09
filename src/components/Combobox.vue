<script setup lang="ts">
      import { filteredCountries } from '@/utils/countrydata';
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
            query.value = country.name;
            emit('countrySelected', country);
      }

</script>

<template>
      <Combobox v-model="selectedCountry" @change="handleSelect">
            <div class="relative mt-1">
                  <ComboboxInput @change="query = $event.target.value" class="w-11/12 border-2 p-2 relative cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#dce603] sm:text-lg"/>
                  <ComboboxOptions class="w-11/12 max-h-96 font-medium bg-neutral-100 overflow-y-scroll flex flex-col gap-y-2.5 rounded-2xl mt-2">
                        <ComboboxOption
                              v-for="country in queriedCountries"
                              :key="country"
                              :value="country"
                              class="cursor-pointer font-medium hover:bg-[#dce603] p-4 "
                        >
                              {{ country }}
                        </ComboboxOption>
                  </ComboboxOptions>
            </div>
       </Combobox>
</template>