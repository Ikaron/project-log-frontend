<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import {useProjectsStore} from '../store/projects'
import {computed} from 'vue'
import {type Project} from '../api'

const store = useProjectsStore()

const projects = computed(() => store.projects)
const selectedId = computed(() => store.selectedProjectId)

function isExpanded(id: number) {
  return selectedId.value === id
}
</script>

<template>
  <div class="grid">
    <ProjectCard
        v-for="p in [...projects, { id: -projects.length - 1, name: '', description: '', createdAt: new Date() } satisfies Project]"
        :key="p.id"
        :project="p"
        :is-expanded="isExpanded(p.id)"
    />
  </div>
</template>