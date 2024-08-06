<script setup lang="ts">
import { ref } from 'vue';

const isRightHand = ref(true);

const togglePosition = () => {
  isRightHand.value = !isRightHand.value;
};

const items = Array.from({ length: 10 });
</script>

<template>
      <div class="flex flex-col bg-black absolute right-0 top-0 w-2/5 h-screen mr-[12%]">
            <img width="425" :class="['absolute -rotate-90', isRightHand ? 'right-0' : 'left-0']" src="../assets/images/SUV.png"/>
            <div class="flex flex-col gap-y-12 py-4">
                  <div  v-for="item in items" class="self-center justify-center w-4 h-12 bg-yellow-300"></div>
            </div>
      </div>

      <button @click="togglePosition" class="absolute left-0  mx-16 bg-blue-500 text-white px-4 py-2 rounded">
            Toggle Position
      </button>
</template>
