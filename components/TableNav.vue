<template>
   <div class="flex justify-between items-center h-[4rem] border-b w-full">
      <div class="flex gap-9">
         <div class="text-orange-500 h-full ">
            <p>Direct Messages</p>
         </div>
         <p>Group</p>
      </div>

      <div class=" mt-2 flex items-center ">
         <input
            type="text"
            placeholder="Search..."
            class=" relative pl-6 block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
         />
         <div class="absolute md:ml-[200px] ">
            <MagnifyingGlassIcon class="h-4 w-4" />
         </div>
      </div>
   </div>
</template> 

<script setup>
import {
MagnifyingGlassIcon
} from "@heroicons/vue/24/outline";

</script>