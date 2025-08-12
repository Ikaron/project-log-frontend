<script setup lang="ts">
import {nextTick, onMounted, ref, watch} from 'vue'

const props = defineProps<{
  modelValue: string
  editable?: boolean
  collapsed?: boolean
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const localValue = ref(props.modelValue)
const textarea = ref<HTMLTextAreaElement | null>(null)

watch(() => props.modelValue, v => {
  localValue.value = v
  nextTick(resize)
})

watch(() => props.collapsed, _ => {
  nextTick(resize)
})

function onBlur() {
  emit('update:modelValue', localValue.value.trim())
}

function resize() {
  if (textarea.value) {
    textarea.value.style.height = 'auto'
    textarea.value.style.height = textarea.value.scrollHeight + 'px'
  }
}

onMounted(() => {
  resize()
})

</script>

<template>
  <div
      v-if="editable"
      class="ml-1 pr-4 mt-1 border-transparent focus-within:bg-gray-200 dark:focus-within:bg-neutral-900 focus-within:border-gray-200 dark:focus-within:border-neutral-900 rounded-xl"
  >
    <textarea
        ref="textarea"
        v-model="localValue"
        @blur="onBlur"
        :placeholder="placeholder"
        @input="resize"
        class="ml-2 mr-2 mt-2 pb-1 focus:outline-none border-b border-b-transparent hover:border-b-gray-800 dark:hover:border-b-gray-100 focus:border-blue-500 dark:focus:border-blue-500 bg-transparent resize-none overflow-hidden w-full"
    />
  </div>
  <div
      v-else
      class="ml-1 mr-1 mt-3 border-transparent rounded-xl"
  >
    <span
        class="ml-2 mr-2 mt-2 pb-1 focus:outline-none border-b border-b-transparent bg-transparent"
        :class="{
          'w-3/4 line-clamp-1': collapsed,
          'w-full h-auto': !collapsed,
          'placeholder': !modelValue
        }"
    >{{ !modelValue ? placeholder : modelValue }}</span>
  </div>
</template>