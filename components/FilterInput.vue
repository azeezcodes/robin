<template>
   <div class="grid gap-5">
      <div class="grid grid-cols-4 gap-2 items-center">
         <div class="p-3 rounded-md border bg-slate-100">Today</div>
         <div class="p-3 rounded-md border bg-slate-100">Last 7 days</div>
         <div class="p-3 rounded-md border bg-slate-100">This Month</div>
         <div class="p-3 rounded-md border bg-slate-100">Last 3 Months</div>
      </div>

      <div class="flex w-full gap-4 items-center">
         <div>
            <label
               for="email"
               class="block text-sm font-medium leading-6 text-gray-900"
               >Date From</label
            >
            <div class="mt-2">
               <input
                  type="date"
                  name="date"
                  id="date"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="dd-mm-yy"
               />
            </div>
         </div>
         <div>
            <label
               for="email"
               class="block text-sm font-medium leading-6 text-gray-900"
               >Date To</label
            >
            <div class="mt-2">
               <input
                  type="date"
                  name="date"
                  id="date"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="dd-mm-yy"
               />
            </div>
         </div>
      </div>

      <div class="w-full">
         <div>
            <label
               for="location"
               class="block text-sm font-medium leading-6 text-gray-900"
               >Message</label
            >
            <select
               id="location"
               name="location"
               class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6"
               placeholder="Please Select"
            >
               <option>Today</option>
            </select>
         </div>
      </div>

      <div class="w-full">
         <div>
            <label
               for="location"
               class="block text-sm font-medium leading-6 text-gray-900"
               >Media Storage Used</label
            >
            <select
               id="location"
               name="location"
               class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6"
               placeholder="Please Select"
            >
               <option>pdf</option>
            </select>
         </div>
      </div>
   </div>
</template>
