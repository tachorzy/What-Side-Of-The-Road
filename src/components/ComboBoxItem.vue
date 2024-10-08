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
            <div class="md:relative mt-24 xl:mt-1 absolute w-5/6 md:w-full">
                  <ComboboxInput 
                        @change="query = $event.target.value" 
                        class="w-full md:w-11/12 border-2 border-neutral-600 p-2 relative cursor-text overflow-hidden rounded-lg bg-[#11110F] text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 focus-visible:ring-offset-[#dce603] sm:text-lg text-white"
                        data-cy="searchbar"
                  />
                        <ComboboxOptions class="z-50 w-full md:w-11/12 max-h-60 md:max-h-96 font-medium border-2 border-neutral-600 bg-[#11110F] overflow-y-scroll flex flex-col gap-y-2.5 rounded-2xl mt-4 text-white" data-cy="options">
                              <template v-if="queriedCountries.length === 0">
                                    <div class="cursor-not-allowed font-medium p-4 ">No countries found.</div>
                              </template>
                              <template v-else>
                                    <ComboboxOption
                                          v-for="country in queriedCountries"
                                          :key="country"
                                          :value="country"
                                          class="cursor-pointer font-medium hover:text-black hover:bg-[#dce603] p-4 "
                                          data-cy="option"
                                    >
                                          <span v-if="queriedCountries.length === 0">"Country not found."</span>
                                          {{ country }}
                                    </ComboboxOption>
                              </template>
                        </ComboboxOptions>
            </div>
       </Combobox>
</template>