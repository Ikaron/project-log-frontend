<script setup lang="ts">
import EditableField from './EditableField.vue'
import EditableArea from './EditableArea.vue'
import {useProjectsStore} from '../store/projects'
import {type Project} from "../api.ts";
import NoteList from "./NoteList.vue";
import {TrashIcon} from '@heroicons/vue/16/solid'

const props = defineProps<{
  project: Project
  isExpanded: boolean
}>()

const store = useProjectsStore()

function selectProject() {
  if (!props.isExpanded) {
    store.selectedProjectId = props.project.id
  }
}
</script>

<template>
  <div
      class="transition-all duration-500 content-normal not-last:border-b p-4 shadow bg-white border-gray-200 dark:bg-neutral-800 dark:border-neutral-700"
      :class="{
        'cursor-pointer hover:shadow-lg': !isExpanded,
        'h-24 overflow-hidden': !isExpanded,
        'h-auto w-full': isExpanded
      }"
      @click="selectProject"
  >
    <div class="flex flex-row gap-4">
      <EditableField
          v-model="project.name"
          class="font-bold text-lg text-gray-800 dark:text-neutral-200 grow"
          :editable="true"
          placeholder="My next project..."
          @update:modelValue="store.updateProject(project.id, { name: $event })"
      />
      <div class="pr-0 inline-block">
        <div
            class="-m-2 p-2 cursor-pointer text-gray-600 dark:text-neutral-400 hover:text-red-900/50 hover:dark:text-red-400"
            @click="store.deleteProject(project.id)"
        >
          <TrashIcon
              class="size-4"
              v-if="project.id >= 0"
          />
        </div>
      </div>
    </div>

    <EditableArea
        v-model="project.description"
        class="text-gray-800 dark:text-neutral-400"
        :editable="isExpanded"
        :collapsed="!isExpanded"
        :multiline="true"
        placeholder="Enter a description..."
        @update:modelValue="store.updateProject(project.id, { description: $event })"
    />

    <div v-if="isExpanded" class="mt-4">
      <NoteList :projectId="project.id"/>
    </div>
  </div>
</template>