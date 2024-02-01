<template>
   
   <div class="grid md:grid-cols-4 grid-cols-1 gap-4 mt-4">
      <div
         class="flex flex-col bg-white rounded-md border border-violet-100 border-solid max-w-[228px] min-h-[115px] p-4 justify-between items-start"
      >
         <p class="font-normal text-xs text-[#566BA0]">NO OF USERS</p>
         <p class="font-normal text-2xl text-[#566BA0]">{{ userInfo.data.numberOfUsers }}</p>
      </div>
      <div
         class="flex flex-col bg-white rounded-md border border-violet-100 border-solid max-w-[228px] min-h-[115px] p-4 justify-between items-start"
      >
         <p class="font-normal text-xs text-[#566BA0]">TOTAL MESSAGE SENT</p>
         <p class="font-normal text-2xl text-[#566BA0]">{{userInfo.data.totalMessagesSent}}</p>
      </div>
      <div
         class="flex flex-col bg-white rounded-md border border-violet-100 border-solid max-w-[228px] min-h-[115px] p-4 justify-between items-start"
      >
         <p class="font-normal text-xs text-[#566BA0]">TOTAL MEDIA STORAGE USED</p>
         <p class="font-normal text-2xl text-[#566BA0]">{{userInfo.data.totalStorageUsed}}</p>
      </div>
      <div
         class="flex flex-col bg-white rounded-md border border-violet-100 border-solid max-w-[228px] min-h-[115px] p-4 justify-between items-start"
      >
         <p class="font-normal text-xs text-[#566BA0]">TOTAL MEDIA SENT</p>
         <p class="font-normal text-2xl text-[#566BA0]">{{userInfo.data.totalMediaSent}}</p>
      </div>
    
   </div>
  
</template>

<script setup>
const { data : userInfo } = await useFetch(
   'https://sfe-m3if.onrender.com/api/v1/chat_dashboard'
);


</script>

<style></style>
