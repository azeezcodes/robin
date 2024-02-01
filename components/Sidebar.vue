<template>
   <div
      class="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white h-[100vh] pr-8 pl-4 w-[500px] "
   >
      <div class="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
         <div class="flex flex-shrink-0 items-center px-4">
            <img
               loading="lazy"
               src="@/assets/logo.svg"
               class="object-contain object-center shrink-0 self-start max-w-full aspect-[3.57] w-[123px]"
               alt="logo"
            />
         </div>
         <nav class="mt-12 flex-1 space-y-4 bg-white px-2" aria-label="Sidebar">
            <a
               v-for="item in navigation"
               :key="item.name"
               :href="item.href"
               :class="[
                  item.current
                     ? 'bg-gray-100 text-orange-500 hover:bg-gray-100 hover:text-orange-500'
                     : 'text-gray-600 hover:bg-gray-50 hover:text-orange-500',
                  'group flex items-center rounded-md px-2 py-2 text-sm font-medium',
               ]"
            >
               <component
                  :is="item.icon"
                  :class="[
                     item.current
                        ? 'text-orange-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                     'mr-3 h-6 w-6 flex-shrink-0',
                  ]"
                  aria-hidden="true"
               />
               <span class="flex-1">{{ item.name }}</span>
            </a>
         </nav>
      </div>
      <div class="flex flex-col border-t border-gray-200 p-4  pt-[5rem] gap-4">
         <div class="flex gap-3 items-center mb-8">
            <ArrowLeftIcon class="w-6 h-4" /> <span>Collapse</span>
         </div>
         <div class="flex gap-3 items-center text-orange-500">
           <ChatBubbleOvalLeftEllipsisIcon class="w-6 h-4" /> <span class="text-sm">Give Feedback</span>
         </div>
      </div>
   </div>
</template>

<script setup>
import {
   Cog8ToothIcon,
   ChartBarIcon,
   FaceSmileIcon,
   BellIcon,
   ChatBubbleBottomCenterIcon,
   CpuChipIcon,
   LightBulbIcon,
   ArrowLeftIcon,
   ChatBubbleOvalLeftEllipsisIcon
} from "@heroicons/vue/24/outline";

const navigation = [
   { name: "Get Started", icon: CpuChipIcon, href: "#", current: false },
   {
      name: "Analytics",
      icon: ChartBarIcon,
      href: "/",
      count: 3,
      current: true,
   },
   {
      name: "Chat",
      icon: ChatBubbleBottomCenterIcon,
      href: "/message",
      count: 4,
      current: false,
   },
   { name: "Moderation", icon: FaceSmileIcon, href: "#", current: false },
   {
      name: "API & Auth Keys",
      icon: LightBulbIcon,
      href: "#",
      count: 12,
      current: false,
   },
   { name: "Announcement", icon: BellIcon, href: "#", current: false },
   { name: "Setting", icon: Cog8ToothIcon, href: "#", current: false },
];
</script>
