<template>
   <div class="px-4 sm:px-6 lg:px-8">
      <TableNav />

      <div class="mt-8 flow-root">
         <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
               class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
            >
               <div
                  class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"
               >
                  <table class="min-w-full divide-y divide-gray-300">
                     <thead class="bg-gray-50 text-[#9999BC]">
                        <tr>
                           <th
                              scope="col"
                              class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6"
                           >
                              USERS
                           </th>
                           <th
                              scope="col"
                              class="px-3 py-3.5 text-left text-sm font-semibold"
                           >
                              MESSAGES SENT
                              <span>
                                 <Icon
                                    name="carbon:caret-sort"
                                    style="color: [#9999BC]"
                              /></span>
                           </th>
                           <th
                              scope="col"
                              class="px-3 py-3.5 text-left text-sm font-semibold"
                           >
                              MEDIA STORAGE USED
                              <span>
                                 <Icon
                                    name="carbon:caret-sort"
                                    style="color: [#9999BC]"
                              /></span>
                           </th>
                           <th
                              scope="col"
                              class="px-3 py-3.5 text-left text-sm font-semibold"
                           >
                              DATE CREATED
                              <span>
                                 <Icon
                                    name="carbon:caret-sort"
                                    style="color: [#9999BC]"
                              /></span>
                           </th>
                           <th
                              scope="col"
                              class="px-3 py-3.5 text-left text-sm font-semibold"
                           >
                              MEDIA SENT
                              <span>
                                 <Icon
                                    name="carbon:caret-sort"
                                    style="color: [#9999BC]"
                              /></span>
                           </th>
                           <th
                              scope="col"
                              class="relative py-3.5 pl-3 pr-4 sm:pr-6"
                           >
                              <span class="sr-only">
                                 <Icon name="bi:three-dots" color="green" />
                              </span>
                           </th>
                        </tr>
                     </thead>
                     <tbody class="divide-y divide-gray-200 bg-white">
                        <tr v-for="person in userInfo.data" :key="person.email">
                           <td
                              class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                           >
                              {{ capitalizeWords(person.full_name) }}
                           </td>
                           <td
                              class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                           >
                              {{ person.message_sent }}
                           </td>
                           <td
                              class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                           >
                              {{ person.media_storage_used }}
                           </td>
                           <td
                              class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                           >
                              {{ formatDate(person.date_created) }}
                           </td>
                           <td
                              class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                           >
                              {{ person.media_sent }}
                           </td>
                           <td
                              class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                           >
                              <!-- //code for alert -->
                              <Popover class="relative">
                                 <PopoverButton
                                    class="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                                 >
                                    <Icon name="bi:three-dots" color="black" />
                                 </PopoverButton>
                                 <transition
                                    enter-active-class="transition ease-out duration-200"
                                    enter-from-class="opacity-0 translate-y-1"
                                    enter-to-class="opacity-100 translate-y-0"
                                    leave-active-class="transition ease-in duration-150"
                                    leave-from-class="opacity-100 translate-y-0"
                                    leave-to-class="opacity-0 translate-y-1"
                                 >
                                    <PopoverPanel
                                       class="absolute right-0 z-100 mt-2 w-[150px] origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                       <div
                                          class="rounded flex flex-col bg-white"
                                       >
                                          <div
                                             class="flex justify-between items-center py-2 px-3"
                                          >
                                             <p>View</p>
                                             <EyeIcon class="h-6 w-6" />
                                          </div>
                                          <div
                                             class="flex justify-between gap-5 items-center py-2 px-3"
                                          >
                                             <p class="text-red-400">Disable</p>
                                             <XCircleIcon
                                                class="h-6 w-6 text-red-400"
                                             />
                                          </div>
                                       </div>
                                    </PopoverPanel>
                                 </transition>
                              </Popover>
                              <!-- end of alert code -->
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { EyeIcon, XCircleIcon } from "@heroicons/vue/24/outline";

const { data: userInfo } = await useFetch(
   "https://sfe-m3if.onrender.com/api/v1/messages?page=1&limit=5"
);

const formatDate = (dateString) => {
   return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
   });
};
const capitalizeWords=(inputString) => {
   const words = inputString.split(" ");
   const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
   );
   const resultString = capitalizedWords.join(" ");
   return resultString;
}
</script>
