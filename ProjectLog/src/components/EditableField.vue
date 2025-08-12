<script setup lang="ts">
import {ref, watch} from 'vue'

const props = defineProps<{
  modelValue: string
  editable?: boolean
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const localValue = ref(props.modelValue)
watch(() => props.modelValue, v => (localValue.value = v))

function onBlur() {
  emit('update:modelValue', localValue.value.trim())
}
</script>

<template>
  <input
      v-if="editable"
      v-model="localValue"
      @blur="onBlur"
      :placeholder="placeholder"
      class="focus:outline-none border-b border-b-transparent hover:border-b-gray-800 dark:hover:border-b-gray-100 focus:border-blue-500 dark:focus:border-blue-500 bg-transparent w-fit"
  />
  <span v-else-if="!modelValue">{{ placeholder }}</span>
  <span v-else>{{ modelValue }}</span>
</template>