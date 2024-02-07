<script setup>
import { ref } from 'vue'

// const section = ref('')
// const groupName = ref('')
// const repo = ref('')
const numMembers = ref(0)

const member = {
  projectCo : false,
  studentId : '',
  studentName : '',
}

const newGroup = ref({
  section: '',
  groupName: '',
  repo: '',
  members: [],
})

const btnStyle = 'border border-gray-300 rounded-lg'

const saveNewGroup = (event) => {
  console.log(event.target)
  console.log(event.target.id)
  console.log(event.target.value)
  console.log(event.target.tagName)
}
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
      <input type="number" v-model="numMembers" :class="btnStyle" />
      <div v-for="n in numMembers">
        <!-- <span>{{ n }}</span> -->
        {{ console.log(newGroup.members) }}
        <!-- <input type="checkbox" v-model="member.projectCo"/> Project Coordirector
        <span>Student ID : <input type="text" v-model="member.studentId" /></span>
        <span>Student Name : <input type="text" v-model="member.studentName" /></span> -->
        <!-- {{ newGroup.members.push(member) }} -->
      </div>
    </div>
    <div class="flex justify-center gap-2">
      <button
        class="bg-indigo-700 text-white px-2 py-1 rounded-lg"
        id="save-btn"
        @click="saveNewGroup($event)"
      >
        OK, inline
      </button>
      <button
        class="bg-indigo-700 text-white px-2 py-1 rounded-lg"
        id="save-btn"
        @click="saveNewGroup"
      >
        OK
      </button>
      <button class="bg-red-600 text-white px-2 py-1 rounded-lg">Cancel</button>
    </div>
  </div>
</template>

<style scoped></style>
