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
      />
      <RightHandDriveSUV
            v-else
      />
</template>