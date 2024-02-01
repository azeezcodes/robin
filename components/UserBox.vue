<template>
   <div class="grid md:grid-cols-4 grid-cols-1 gap-4 mt-4">
      <div
         class="flex flex-col bg-white rounded-md border border-violet-100 border-solid max-w-[228px] min-h-[115px] p-4 justify-between items-start"
      >
         <p class="font-normal text-xs text-[#566BA0]">Users Online</p>
         <p class="font-normal text-2xl text-[#566BA0]">
            {{userInfo.data.usersOnline}}
         </p>
      </div>
      <div
         class="flex flex-col bg-white rounded-md border border-violet-100 border-solid max-w-[228px] min-h-[115px] p-4 justify-between items-start"
      >
         <p class="font-normal text-xs text-[#566BA0]">Users Active Today</p>
         <p class="font-normal text-2xl text-[#566BA0]"> {{userInfo.data.usersActiveToday}}</p>
      </div>
      <div
         class="flex flex-col bg-white rounded-md border border-violet-100 border-solid max-w-[228px] min-h-[115px] p-4 justify-between items-start"
      >
         <p class="font-normal text-xs text-[#566BA0]">
            Users Active This Month
         </p>
         <p class="font-normal text-2xl text-[#566BA0]"> {{userInfo.data.usersActiveThisMonth}}</p>
      </div>
      <div
         class="flex flex-col bg-white rounded-md border border-violet-100 border-solid max-w-[228px] min-h-[115px] p-4 justify-between items-start"
      >
         <p class="font-normal text-xs text-[#566BA0]">
            Peak Concurrency This Month
         </p>
         <p class="font-normal text-2xl text-[#566BA0]"> {{userInfo.data.peakConcurrency}}</p>
      </div>
      <div
         class="flex flex-col bg-white rounded-md border border-violet-100 border-solid max-w-[228px] min-h-[115px] p-4 justify-between items-start"
      >
         <p class="font-normal text-xs text-[#566BA0]">Dashboard</p>
         <p class="font-normal text-2xl text-[#566BA0]"> {{userInfo.data.dashboard}}</p>
      </div>
   </div>

   <EachMessageView />
</template>

<script setup>
const { data : userInfo } = await useFetch(
   "https://sfe-m3if.onrender.com/api/v1/dashboard"
);

</script>
