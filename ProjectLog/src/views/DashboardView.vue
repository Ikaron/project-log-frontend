<script setup lang="ts">
import {ref, onMounted, computed} from 'vue'
import {useProjectsStore} from '../store/projects'
import ProjectList from "../components/ProjectList.vue";

const store = useProjectsStore()

const loading = computed(() => store.loading)
const error = computed(() => store.error)

onMounted(() => {
  store.fetchProjects()
})
</script>

<template>
  <div
      class="lg:h-full overflow-hidden flex flex-col bg-white border border-gray-200 shadow-xs rounded-lg dark:bg-neutral-800 dark:border-neutral-700">
    <div
        class="py-3 px-4 flex flex-wrap justify-between items-center gap-2 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 sticky">
      <h1 class="text-lg font-bold text-gray-800 dark:text-neutral-200">Dashboard</h1>
    </div>

    <div v-if="loading" class="text-gray-500">Loading projects...</div>
    <div v-if="error" class="text-red-600 mb-2">{{ error }}</div>

    <ProjectList/>
  </div>
</template>