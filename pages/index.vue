<script setup>
const nuxt = useNuxtApp();
</script>
<template>
   <div class="px-16 mt-4">
      <div class="flex gap-2 items-center">
         <p class="text-base text-[#51545C] font-normal">
            Last updated 1 minute ago
         </p>
         <Icon name="iconamoon:synchronize-bold" color="green" />
         <p class="text-[#15AE73]">Refresh</p>
        
      </div>
       <UserBox />
       <div class="flex gap-4 w-full h-[230px]">
         <ChartOne />
         <ChartOne />
       </div>
   </div>
</template>
