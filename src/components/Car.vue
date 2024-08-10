<script setup>
const props = defineProps({
      isRightHand: Boolean
});
</script>

<template>
      <img 
            v-if="props.isRightHand"
            v-motion-slide-visible-once-bottom 
            class="mt-60 xl:mt-80 z-10 absolute -rotate-90 right-0 mr-12 md:scale-100 w-28 xl:w-72" 
            src="/images/SUV_LHD.svg"
      />
      <img 
            v-else:
            v-motion-slide-visible-once-bottom 
            class="mt-60 xl:mt-80 z-10 absolute -rotate-90 left-0 ml-12 w-28 xl:w-72" 
            src="/images/SUV_RHD.svg"
      />
</template>