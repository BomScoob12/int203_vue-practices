<script setup>
import { ref } from 'vue'
// const studentId = ref(1)
let studentId = 1
console.log(studentId.value)
const increaseId = () => {
  studentId++
  console.log(studentId)
}
const note = ref('')
const hobbies = ref([])
</script>

<template>
  <div>
    <div>
      <textarea
        v-model="note"
        class="border border-gray-300"
        cols="30"
        rows="10"
        placeholder="type your note here..."
      ></textarea>
      {{ note }}
    </div>
    <div>
      <input type="checkbox" value="Gaming" v-model="hobbies" />Gaming
      <input type="checkbox" v-model="hobbies" value="Swimming" />Swimming
      {{ hobbies }}
    </div>
    <div>
      Student Id:
      <input
        type="text"
        v-model="studentId"
        class="border border-gray-300 outline-none rounded-lg"
      />
      {{ studentId }}
      <button
        @click="increaseId"
        class="bg-indigo-600 text-white px-2 py-1 rounded-lg"
      >
        +
      </button>
    </div>
  </div>
</template>

<style scoped></style>