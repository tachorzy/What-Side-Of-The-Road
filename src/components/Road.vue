<script setup lang="ts">
import { ref, watch } from 'vue';
import { sideOfTheRoad as sharedSideOfTheRoad } from '@/state';

const items = Array.from({ length: 10 });

console.log(`Side of the road in Road.vue is ${sharedSideOfTheRoad.value}`);
const isRightHand = ref(sharedSideOfTheRoad.value === 'right');

watch(sharedSideOfTheRoad, (newValue) => {
  console.log(`Side of the road in Road.vue is ${newValue}`);
  isRightHand.value = newValue === 'right';
});
</script>

<template>
      <div class="flex flex-col bg-black absolute md:right-0 top-0 w-11/12 lg:w-2/5 h-screen mr-[12%]">
            <img 
                  v-if="isRightHand"
                  v-motion-slide-visible-once-bottom 
                  class="mt-80 absolute -rotate-90 right-0 mr-4 xl:mr-12 md:scale-100 w-32 xl:w-72" 
                  src="/images/SUV.png"
            />
            <img 
                  v-else:
                  v-motion-slide-visible-once-bottom 
                  class="mt-80 absolute -rotate-90 left-0 ml-4 xl:ml-12 w-32 xl:w-72" 
                  src="/images/SUV.png"
            />

            <div class="flex flex-col gap-y-12 py-4">
                  <div  v-for="item in items" class="self-center justify-center w-2.5 xl:w-4 h-12 bg-neutral-200"></div>
            </div>
      </div>
</template>

