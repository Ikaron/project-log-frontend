<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <div class="min-w-screen min-h-screen">
    <!-- Header -->
    <div class="w-full mx-auto">
      <header class="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav
            class="mt-4 relative max-w-[calc(100%-2.5em)] w-full bg-white border border-gray-200 rounded-[24px] mx-2 flex flex-wrap md:flex-nowrap items-center justify-between p-1 ps-4 md:py-0 mx-auto dark:bg-neutral-900 dark:border-neutral-700">
          <div class="flex items-center">
            <a class="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80 text-gray-800 dark:text-neutral-200"
               href="/">
              ProjectLog
            </a>
          </div>
          <div class="flex items-center gap-1">
            <RouterLink to="/"
                        class="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 hover:text-gray-800 focus:outline-hidden dark:border-neutral-200 dark:text-neutral-200 dark:hover:text-neutral-200">
              Dashboard
            </RouterLink>
          </div>
          <div class="flex items-center gap-1">
            <a class="w-full sm:w-auto whitespace-nowrap py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200">
              Profile
            </a>
          </div>
        </nav>
      </header>

      <!-- Main content area -->
      <main class="w-full mx-auto p-4 border-gray-200 dark:border-neutral-700">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"/>
          </transition>
        </RouterView>
      </main>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>