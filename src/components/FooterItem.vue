<script setup>
import BrandLogo from '@/components/BrandLogo.vue';
</script>

<template>
      <div class="flex flex-row gap-x-24 pt-10 bg-[#0A0B06] border-t-2 border-neutral-700 absolute left-0 mt-[22.75rem] w-full h-72 p-16">
            <div class="flex flex-col w-1/5">
                  <BrandLogo />
                  <p class="text-base leading-relaxed text-pretty text-white pt-1.5">
                        Unsure whether your travel destination drives on the left or the right? We got you covered. Search the traffic rules of 197+ countries.
                  </p>
                  <span className="text-white text-xs mt-10">© {{new Date().getFullYear()}} WhichSideOfTheRoad.com. All rights reserved.</span>
            </div> 
            <div class="flex flex-row gap-x-5 absolute bottom-0 right-0 mr-24 mb-8 ">
                  <svg class="group w-9 h-9 cursor-pointer hover:scale-105 transition-all duration-500 bg-transparent" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <a href="https://github.com/tachorzy/Which-Side-Of-The-Road" target="_blank" class="fill-white group-hover:fill-[#dce603]">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
                        </a>
                  </svg>

                  <svg class="group w-9 h-9 cursor-pointer hover:scale-105 transition-all duration-500 bg-transparent" width="134" height="172" viewBox="0 0 134 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <a href="https://www.tachorzy.com/" target="_blank" class="fill-white group-hover:fill-[#dce603]">
                              <path d="M49.14 101.22C49.14 86.4867 48.7933 73.92 48.1 63.52C47.4067 53.12 46.28 42.2867 44.72 31.02C49.92 24.78 55.4667 18.8 61.36 13.08C67.4267 7.36 72.8867 3.2 77.74 0.599988C78.4333 3.37333 78.78 7.18666 78.78 12.04C78.78 20.36 77.8267 32.1467 75.92 47.4C74.1867 62.48 72.8 71.06 71.76 73.14L54.86 111.36L49.14 109.54V101.22ZM111.8 70.28C119.253 70.28 124.713 72.4467 128.18 76.78C131.82 80.94 133.64 87.7867 133.64 97.32C133.64 106.333 132.253 115.693 129.48 125.4C126.707 135.107 122.893 142.993 118.04 149.06C111.8 156.86 102.787 162.493 91 165.96C79.3867 169.427 66.6467 171.16 52.78 171.16C50.3533 171.16 47.9267 170.987 45.5 170.64C35.7933 166.827 27.7333 162.407 21.32 157.38C14.9067 152.18 8.66667 145.853 2.6 138.4C1.04 136.667 0.173333 135.28 0 134.24C22.7067 133.547 41.9467 132.68 57.72 131.64C64.48 110.493 69.8533 96.6267 73.84 90.04C77.6533 83.9733 83.0267 79.2067 89.96 75.74C97.0667 72.1 104.347 70.28 111.8 70.28ZM67.34 130.86C77.22 129.993 86.2333 128.607 94.38 126.7C102.7 124.793 109.2 122.713 113.88 120.46C118.56 118.207 120.9 116.3 120.9 114.74C120.9 113.527 119.687 112.487 117.26 111.62C114.833 110.753 111.453 110.32 107.12 110.32C100.88 110.32 94.2933 111.447 87.36 113.7C80.4267 115.78 74.7933 118.553 70.46 122.02L67.34 130.86Z"/>
                        </a>
                  </svg>
            </div>
      </div>
</template>