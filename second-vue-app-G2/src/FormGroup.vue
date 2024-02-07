<script setup>
import { ref } from 'vue'

const section = ref('')
const groupName = ref('')
const repo = ref('')
const numMembers = ref(0)

const newGroup = ref({
  section: "",
  groupName: "",
  repo: "",
  members: 0
})

const btnStyle = 'border border-gray-300 rounded-lg'
</script>

<template>
  <div class="w-full p-4 bg-slate-100">
    <div class="m-2">
      Section :
      <select v-model="newGroup.section" v-bind:class="btnStyle">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
    <div class="m-2">
      Group Name:
      <input type="text" v-model.trim="newGroup.groupName" :class="btnStyle" />
    </div>
    <div class="m-2">
      Repository:
      <input type="text" v-model="newGroup.repo" :class="btnStyle" />
    </div>
    <div class="m-2">
      Number of members :
      <input type="text" v-model="newGroup.members" :class="btnStyle">
    </div>
    <div class="flex justify-center gap-2">
      <button class="bg-indigo-700 text-white px-2 py-1 rounded-lg">OK</button>
      <button class="bg-red-600 text-white px-2 py-1 rounded-lg">Cancel</button>
    </div>
  </div>
</template>

<style scoped></style>
