<script setup lang="ts">
import { ref, watch } from 'vue';
import { sideOfTheRoad as sharedSideOfTheRoad } from '@/state';
import Car from '@/components/Car.vue';

const items: Array<string | number> = Array.from({ length: 12 });

console.log(`Side of the road in Road.vue is ${sharedSideOfTheRoad.value}`);
const isRightHand = ref(sharedSideOfTheRoad.value === 'right');

watch(sharedSideOfTheRoad, (newValue) => {
  console.log(`Side of the road in Road.vue is ${newValue}`);
  isRightHand.value = newValue === 'right';
});
</script>

<template>
      <div class="z-0 flex flex-col overflow-hidden bg-black border-l-2 border-r-2 border-neutral-700 md:absolute md:right-0 bottom-0 md:top-0 mt-40 md:mt-0 w-full h-1/4 lg:w-2/5 md:h-screen md:mr-[12%]">
            <Car :isRightHand="isRightHand" /> 
            <div class="flex flex-col gap-y-10 pt-4">
                  <div  v-for="item in items" class="self-center justify-center w-2.5 xl:w-4 h-12 bg-neutral-200 " v-bind:key="item"></div>
            </div>
      </div>
</template>