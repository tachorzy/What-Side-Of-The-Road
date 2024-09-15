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
            data-cy="left-hand-suv"
      />
      <RightHandDriveSUV
            v-else
            data-cy="right-hand-suv"
      />
</template>