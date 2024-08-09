<script setup lang="ts">
import { ref } from 'vue';

const togglePosition = () => {
  isRightHand.value = !isRightHand.value;
};

const items = Array.from({ length: 10 });

const sideOfTheRoad = ref<string>('INITIAL_STATE');
console.log(sideOfTheRoad.value);
const isRightHand = ref(sideOfTheRoad.value === 'right');
</script>

<template>
      <div class="flex flex-col bg-black absolute right-0 top-0 w-2/5 h-screen mr-[12%]">
            <img 
                  width="500" 
                  :class="['mt-96 absolute -rotate-90', isRightHand ? 'right-0 -mr-16' : 'left-0 -ml-16 ']" 
                  src="../assets/images/SUV.png"
            />
            <div class="flex flex-col gap-y-12 py-4">
                  <div  v-for="item in items" class="self-center justify-center w-4 h-12 bg-yellow-300"></div>
            </div>
      </div>
</template>

