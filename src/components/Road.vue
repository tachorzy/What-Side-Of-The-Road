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
      <div class="flex flex-col bg-black absolute right-0 top-0 w-2/5 h-screen mr-[12%]">
            <img 
                  v-if="isRightHand"
                  v-motion-slide-visible-once-bottom 
                  width="500" 
                  class="mt-96 absolute -rotate-90 right-0 -mr-16" 
                  src="../assets/images/SUV.png"
            />
            <img 
                  v-else:
                  v-motion-slide-visible-once-bottom 
                  width="500" 
                  class="mt-96 absolute -rotate-90 left-0 -ml-16" 
                  src="../assets/images/SUV.png"
            />

            <div class="flex flex-col gap-y-12 py-4">
                  <div  v-for="item in items" class="self-center justify-center w-4 h-12 bg-neutral-200"></div>
            </div>
      </div>
</template>

