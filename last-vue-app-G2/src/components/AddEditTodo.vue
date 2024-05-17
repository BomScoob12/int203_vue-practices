<script setup>
import { ref, computed } from 'vue'
defineEmits(['closeModal'])
const props = defineProps({
  todo: {
    type: Object,
    default: { 
        id: undefined, 
        category: '', 
        description: '' 
    }
  }
})

const previousTodo = computed(() => props.todo)
console.log(previousTodo.value)
</script>

<template>
  <div class="flex flex-col p-2 gap-5">
    <h1 class="font-semibold text-xl">
      {{ previousTodo.id === undefined ? 'Add' : 'Edit' }} Todo
    </h1>
    <div class="flex flex-col">
      <div class="flex gap-3">
        <span>Category</span>
        <input type="radio" value="home" v-model="previousTodo.category" />
        <span>home</span>
        <input type="radio" value="work" v-model="previousTodo.category" />
        <span>work</span>
      </div>
      <div class="flex gap-3">
        <span>Description</span>
        <input
          v-model.trim="previousTodo.description"
          type="text"
          class="p-0.5 border border-gray-300 rounded-lg outline-none"
        />
      </div>
    </div>
    <div class="flex gap-3">
      <button
        class="bg-slate-100 border border-gray-300 rounded-md hover:opacity-80 px-2 py-0.5"
      >
        Save
      </button>
      <button
        @click="$emit('closeModal', false)"
        class="bg-slate-100 border border-gray-300 rounded-md hover:opacity-80 px-2 py-0.5"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<style scoped></style>