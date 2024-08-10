<script setup>
import LeftHandDriveSUV from '@/components/SUV/LeftHandDriveSUV.vue';
import RightHandDriveSUV from '@/components/SUV/RightHandDriveSUV.vue';
const props = defineProps({
      isRightHand: Boolean
});
</script>

<template>
      <LeftHandDriveSUV 
            v-if="props.isRightHand" 
            v-motion-slide-visible-once-bottom 
            class="z-10 absolute right-0 mr-12 w-28 xl:w-72" 
      />

      <RightHandDriveSUV
            v-else 
            v-motion-slide-visible-once-bottom 
            class="z-10 absolute left-0 ml-12 w-28 xl:w-72"
      />
</template>